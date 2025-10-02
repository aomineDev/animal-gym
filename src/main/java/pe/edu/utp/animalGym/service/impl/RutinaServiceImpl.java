package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.DetalleRutina;
import pe.edu.utp.animalGym.model.Ejercicio;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.repository.EjercicioRepository;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.repository.RutinaRepository;
import pe.edu.utp.animalGym.service.RutinaService;

@Service
public class RutinaServiceImpl implements RutinaService {

    @Autowired
    private RutinaRepository repository;

    @Autowired
    private EjercicioRepository ejercicioRepository;

    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Override
    public List<Rutina> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Rutina> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Rutina save(Rutina entity) {

        // Si es update
        if (entity.getRutinaId() != null) {
            Rutina existente = repository.findById(entity.getRutinaId())
                    .orElseThrow(() -> new RuntimeException("Rutina no encontrada"));

            // Si detalleList vino null, preservar lo existente
            if (entity.getDetalleRutinaList().isEmpty()) {
                entity.setDetalleRutinaList(existente.getDetalleRutinaList());
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

    /* PARA EL DETALLE */
    public Rutina addDetalle(Integer rutinaId, DetalleRutina nuevoDetalle) {
        Rutina rutina = repository.findById(rutinaId)
                .orElseThrow(() -> new RuntimeException("Rutina no encontrada"));

        // Generar ID secuencial manualmente
        int nextId = rutina.getDetalleRutinaList().stream()
                .mapToInt(DetalleRutina::getDetalleRutinaId)
                .max()
                .orElse(0) + 1;

        nuevoDetalle.setDetalleRutinaId(nextId);
        rutina.getDetalleRutinaList().add(nuevoDetalle);

        // Si trae empleado con id, buscarlo en repo
        if (nuevoDetalle.getEjercicio() != null && nuevoDetalle.getEjercicio().getEjercicioId() != null) {
            Ejercicio ejercicio = ejercicioRepository.findById(nuevoDetalle.getEjercicio().getEjercicioId())
                    .orElseThrow(() -> new RuntimeException("Ejercicio no encontrado"));
            nuevoDetalle.setEjercicio(ejercicio);
            ;
        }

        return repository.save(rutina);
    }

    // public Rutina updateDetalle(Integer rutinaId, Integer detalleId,
    // DetalleRutina detalleEditado) {
    // Rutina rutina = repository.findById(rutinaId)
    // .orElseThrow(() -> new RuntimeException("Rutina no encontrada"));

    // DetalleRutina existente = rutina.getDetalleRutinaList().stream()
    // .filter(d -> d.getDetalleId().equals(detalleId))
    // .findFirst()
    // .orElseThrow(() -> new RuntimeException("Detalle no encontrado"));

    // // Actualizar campos
    // existente.setEjercicio(detalleEditado.getEjercicio());
    // existente.setSeries(detalleEditado.getSeries());
    // existente.setRepeticiones(detalleEditado.getRepeticiones());
    // existente.setPeso(detalleEditado.getPeso());

    // return repository.save(rutina);
    // }

    // public Rutina removeDetalle(Integer rutinaId, Integer detalleId) {
    // Rutina rutina = repository.findById(rutinaId)
    // .orElseThrow(() -> new RuntimeException("Rutina no encontrada"));

    // boolean eliminado = rutina.getDetalleRutinaList()
    // .removeIf(d -> d.getDetalleId().equals(detalleId));

    // if (!eliminado) {
    // throw new RuntimeException("Detalle no encontrado");
    // }

    // return repository.save(rutina);
    // }

}
