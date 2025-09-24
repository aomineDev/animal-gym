package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.DetalleRutina;
import pe.edu.utp.animalGym.model.Ejercicio;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rutina;

@Repository
public class RutinaRepository {

    private final List<Rutina> rutinaList = new ArrayList<>();

    public RutinaRepository(EmpleadoRepository empleadoRepository, EjercicioRepository ejercicioRepository) {

        Empleado entrenador1 = empleadoRepository.findById(1).orElseThrow();
        Empleado entrenador2 = empleadoRepository.findById(2).orElseThrow();

        Ejercicio sentadilla = ejercicioRepository.findById(1).orElseThrow();
        Ejercicio prensa = ejercicioRepository.findById(2).orElseThrow();
        Ejercicio curlBiceps = ejercicioRepository.findById(3).orElseThrow();
        Ejercicio tricepsPolea = ejercicioRepository.findById(4).orElseThrow();

        // --------- Rutina de Piernas ----------
        ArrayList<DetalleRutina> detallesPierna = new ArrayList<>();
        detallesPierna.add(new DetalleRutina("Lunes", 4, 12, 40, 200, 90, sentadilla));
        detallesPierna.add(new DetalleRutina("Miércoles", 4, 10, 80, 250, 120, prensa));

        Rutina rutinaPierna = new Rutina(
                1,
                "Rutina de Piernas",
                "Rutina enfocada en fuerza de tren inferior",
                "Mejorar fuerza y volumen de piernas",
                LocalDate.now(),
                LocalDate.now().plusMonths(2),
                entrenador1,
                detallesPierna);
        save(rutinaPierna);

        // --------- Rutina de Brazos ----------
        ArrayList<DetalleRutina> detallesBrazo = new ArrayList<>();
        detallesBrazo.add(new DetalleRutina("Martes", 4, 12, 15, 100, 60, curlBiceps));
        detallesBrazo.add(new DetalleRutina("Jueves", 4, 12, 20, 120, 60, tricepsPolea));

        Rutina rutinaBrazo = new Rutina(
                2,
                "Rutina de Brazos",
                "Rutina para hipertrofia de bíceps y tríceps",
                "Aumentar masa muscular en brazos",
                LocalDate.now(),
                LocalDate.now().plusMonths(1),
                entrenador2,
                detallesBrazo);
        save(rutinaBrazo);
    }

    private Integer nextId = 1;

    public List<Rutina> findAll() {
        return rutinaList;
    }

    public Optional<Rutina> findById(Integer id) {
        return rutinaList.stream()
                .filter(r -> r.getRutinaId() == id)
                .findFirst();
    }

    public Rutina save(Rutina rutina) {
        if (rutina.getRutinaId() == null) {
            rutina.setRutinaId(nextId++);
        } else {
            deleteById(rutina.getRutinaId());
        }

        rutinaList.add(rutina);
        return rutina;
    }

    public void deleteById(Integer id) {
        rutinaList.removeIf(r -> r.getRutinaId() == id);
    }

    // ---- Para los detalles ----
    public void addDetalleToRutina(Integer rutinaId, DetalleRutina detalle) {
        findById(rutinaId).ifPresent(rutina -> rutina.getDetalleRutinaList().add(detalle));
    }

    public void removeDetalleFromRutina(Integer rutinaId, Integer detalleId) {
        findById(rutinaId).ifPresent(rutina -> rutina.getDetalleRutinaList()
                .removeIf(detalle -> detalle.getDetalleRutinaId().equals(detalleId)));
    }

    public void updateDetallesRutina(Integer rutinaId, List<DetalleRutina> nuevosDetalles) {
        findById(rutinaId).ifPresent(rutina -> rutina.setDetalleRutinaList(new ArrayList<>(nuevosDetalles)));
    }
}
