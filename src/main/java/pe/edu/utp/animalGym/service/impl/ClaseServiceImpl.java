package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.ReservaClase;
import pe.edu.utp.animalGym.repository.ClaseRepository;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.repository.ReservaClaseRepository;
import pe.edu.utp.animalGym.service.ClaseService;

@Service
public class ClaseServiceImpl implements ClaseService {
  @Autowired
  private ClaseRepository repository;

  @Autowired
  private ReservaClaseRepository reservaRepository;

  @Autowired
  private EmpleadoRepository empleadoRepository;

  @Override
  public List<Clase> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Clase> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public Clase save(Clase clase) {
    validarEmpleado(clase);
    mantenerRelacionesUpdate(clase);
    return repository.save(clase);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }

  @Override
  public List<Clase> filtrar(String nombre, String estado, String intensidad) {
    return repository.filtrar(nombre, estado, intensidad);
  }

  private void validarEmpleado(Clase clase) {
    if (clase.getEmpleado() != null && clase.getEmpleado().getPersonaId() != null) {
      Empleado empleado = empleadoRepository.findById(clase.getEmpleado().getPersonaId())
          .orElseThrow(() -> new EntityNotFoundException("Empleado no encontrado"));
      clase.setEmpleado(empleado);
    }
  }

  private void mantenerRelacionesUpdate(Clase clase) {
    if (clase.getClaseId() == null)
      return;

    Clase existente = repository.findById(clase.getClaseId())
        .orElseThrow(() -> new EntityNotFoundException("Clase no encontrada"));

    if (clase.getReservas() == null)
      clase.setReservas(existente.getReservas());

    if (clase.getEmpleado() == null)
      clase.setEmpleado(existente.getEmpleado());
  }

  /* Reservas */
  @Transactional
  public Clase agregarReserva(Integer claseId, ReservaClase reserva) {
    Clase clase = repository.findById(claseId)
        .orElseThrow(() -> new RuntimeException("Clase no encontrada"));

    // Guardamos la reserva en la BD
    ReservaClase reservaGuardada = reservaRepository.save(reserva);
    clase.getReservas().add(reservaGuardada);

    return repository.save(clase);
  }

  @Transactional
  public Clase eliminarReserva(Integer claseId, Integer reservaId) {
    Clase clase = repository.findById(claseId)
        .orElseThrow(() -> new RuntimeException("Clase no encontrada"));

    clase.getReservas().removeIf(r -> r.getReservaClaseId().equals(reservaId));

    return repository.save(clase);
  }

}
