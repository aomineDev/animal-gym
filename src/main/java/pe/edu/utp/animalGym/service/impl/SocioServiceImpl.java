package pe.edu.utp.animalGym.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.repository.MembresiaRepository;
import pe.edu.utp.animalGym.repository.RutinaRepository;
import pe.edu.utp.animalGym.repository.SocioRepository;
import pe.edu.utp.animalGym.service.SocioService;

@Service
public class SocioServiceImpl implements SocioService {

    @Autowired
    private SocioRepository partnerRepository;

    // ** para buscar la membresia
    @Autowired
    private MembresiaRepository membresiaRepository;

    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Autowired
    private RutinaRepository rutinaRepository;

    @Override
    public List<Socio> findAll() {
        return partnerRepository.findAll();
    }

    @Override
    public Optional<Socio> findById(Integer id) {
        return partnerRepository.findById(id);
    }

    @Override
    public Socio save(Socio entity) {

        // Si es update
        if (entity.getPersonaId() != null) {
            Socio existente = partnerRepository.findById(entity.getPersonaId())
                    .orElseThrow(() -> new RuntimeException("Socio no encontrado"));

            // Si rutinas vino null, preservar lo existente
            if (entity.getRutinas() == null) {
                entity.setRutinas(existente.getRutinas());
            }

        }

        // si el socio biene solo con id de membresia
        if (entity.getMembresia() != null && entity.getMembresia().getMembresiaId() != null) {
            var membresia = membresiaRepository.findById(entity.getMembresia().getMembresiaId())
                    .orElseThrow(() -> new RuntimeException("Membresía no encontrada"));
            entity.setMembresia(membresia);
        }

        return partnerRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        partnerRepository.deleteById(id);
    }

    // list de rutinas
    @Transactional
    public Socio saveRutina(Integer socioId, Rutina rutina) {
        Socio socio = partnerRepository.findById(socioId)
                .orElseThrow(() -> new RuntimeException("Socio no encontrado"));

        validarEmpleado(rutina);

        Rutina guardada = rutinaRepository.save(rutina); // Inserta o actualiza según tenga ID o no

        if (!socio.getRutinas().contains(guardada)) {
            socio.getRutinas().add(guardada);
        }

        return partnerRepository.save(socio);
    }

    private void validarEmpleado(Rutina rutina) {
        if (rutina.getEmpleado() != null && rutina.getEmpleado().getPersonaId() != null) {
            Empleado empleado = empleadoRepository.findById(rutina.getEmpleado().getPersonaId())
                    .orElseThrow(() -> new EntityNotFoundException("Empleado no encontrado"));
            rutina.setEmpleado(empleado);
        }
    }

    @Override
    public List<Socio> buscarPorEstado(Boolean estado) {
        return partnerRepository.buscarPorEstado(estado);
    }

    @Override
    public List<Socio> buscarPorRangoVencimiento(LocalDate inicio, LocalDate fin) {
        return partnerRepository.buscarPorRangoVencimiento(inicio, fin);
    }

    @Override
    public List<Socio> buscarPorMembresia(Integer membresiaId) {
        return partnerRepository.buscarPorMembresia(membresiaId);
    }

    @Override
    public List<Socio> buscarPorNombre(String nombre) {
        return partnerRepository.buscarPorNombre(nombre);
    }

}
