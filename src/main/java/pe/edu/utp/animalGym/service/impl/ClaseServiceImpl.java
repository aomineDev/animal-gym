package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.repository.ClaseRepository;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.service.ClaseService;

@Service
public class ClaseServiceImpl implements ClaseService {
  @Autowired
  private ClaseRepository repository;

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
  public Clase save(Clase entity) {
    // Si es update
    if (entity.getClaseId() != null) {
      Clase existente = repository.findById(entity.getClaseId())
          .orElseThrow(() -> new RuntimeException("Clase no encontrada"));

      // Si reservas vino null, preservar lo existente
      if (entity.getReservas() == null) {
        entity.setReservas(existente.getReservas());
      }

      if (entity.getEmpleado() == null) {
        entity.setEmpleado(existente.getEmpleado());
      }
    }

    // Si trae empleado con id, buscarlo en repo
    if (entity.getEmpleado() != null && entity.getEmpleado().getPersonaId() != null) {
      Empleado empleado = empleadoRepository.findById(entity.getEmpleado().getPersonaId())
          .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
      entity.setEmpleado(empleado);
    }

    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
