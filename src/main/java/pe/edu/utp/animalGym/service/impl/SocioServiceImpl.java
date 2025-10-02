package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.repository.RutinaRepository;
import pe.edu.utp.animalGym.repository.SocioRepository;
import pe.edu.utp.animalGym.service.SocioService;

@Service
public class SocioServiceImpl implements SocioService {

    @Autowired
    private SocioRepository partnerRepository;

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

        return partnerRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        partnerRepository.deleteById(id);
    }

    // list de rutinas
    @Override
    public Socio addRutina(Integer socioId, Rutina nuevaRutina) {
        Socio socio = partnerRepository.findById(socioId)
                .orElseThrow(() -> new RuntimeException("Socio no encontrada"));

        nuevaRutina = rutinaRepository.save(nuevaRutina);
        socio.getRutinas().add(nuevaRutina);

        // Si trae empleado con id, buscarlo en repo
        if (nuevaRutina.getEmpleado() != null && nuevaRutina.getEmpleado().getPersonaId() != null) {
            Empleado empleado = empleadoRepository.findById(nuevaRutina.getEmpleado().getPersonaId())
                    .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
            nuevaRutina.setEmpleado(empleado);
            ;
        }

        return partnerRepository.save(socio);
    }

}
