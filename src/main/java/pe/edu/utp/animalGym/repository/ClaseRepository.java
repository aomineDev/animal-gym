package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.ReservaClase;

@Repository
public class ClaseRepository {

    private final List<Clase> claseList = new ArrayList<>();
    private Integer nextId = 1;

    public ClaseRepository(EmpleadoRepository empleadoRepository, ReservaClaseRepository reservaClaseRepository) {

        Empleado empleado1 = empleadoRepository.findById(1).orElseThrow();
        Empleado empleado2 = empleadoRepository.findById(2).orElseThrow();

        // Reservas simuladas por socio
        List<ReservaClase> reservasYoga = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1 || r.getSocio().getPersonaId() == 2)
                .toList();

        List<ReservaClase> reservasCrossfit = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 3 || r.getSocio().getPersonaId() == 4)
                .toList();

        List<ReservaClase> reservasZumba = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1 || r.getSocio().getPersonaId() == 3)
                .toList();

        List<ReservaClase> reservasPilates = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1 || r.getSocio().getPersonaId() == 3)
                .toList();

        List<ReservaClase> reservasSpinning = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 2 || r.getSocio().getPersonaId() == 4)
                .toList();

        List<ReservaClase> reservasKickboxing = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1 || r.getSocio().getPersonaId() == 5)
                .toList();

        List<ReservaClase> reservasYogaSuave = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 5)
                .toList();

        List<ReservaClase> reservasBodyCombat = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 3 || r.getSocio().getPersonaId() == 4)
                .toList();

        List<ReservaClase> reservasZumbaFitness = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 2 || r.getSocio().getPersonaId() == 5)
                .toList();

        List<ReservaClase> reservasFuncional = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1 || r.getSocio().getPersonaId() == 5)
                .toList();

        // Clases
        save(new Clase("Yoga Avanzado", "Clase de relajación y flexibilidad", 1,
                LocalDate.now().plusDays(1), LocalTime.of(9, 0), LocalTime.of(10, 0), 60,
                "Programado", "Mejorar elasticidad", "Baja",
                "/uploads/clases/yoga.png", empleado1, reservasYoga));

        save(new Clase("Crossfit Intenso", "Entrenamiento de alta intensidad", 15,
                LocalDate.now().plusDays(2), LocalTime.of(18, 0), LocalTime.of(19, 30), 90,
                "En curso", "Mejorar fuerza y resistencia", "Alta",
                "/uploads/clases/crossfit.jpg", empleado2, reservasCrossfit));

        save(new Clase("Zumba Energética", "Baile y cardio divertido", 25,
                LocalDate.now().minusDays(1), LocalTime.of(10, 0), LocalTime.of(11, 0), 60,
                "Finalizado", "Mejorar coordinación y cardio", "Media",
                "/uploads/clases/zumba.png", empleado2, reservasZumba));

        save(new Clase("Pilates Intermedio", "Tonificación muscular y postura", 12,
                LocalDate.now().plusDays(3), LocalTime.of(11, 0), LocalTime.of(12, 0), 60,
                "Programado", "Fortalecer core y postura", "Media",
                "/uploads/clases/pilates.png", empleado1, reservasPilates));

        save(new Clase("Spinning Rápido", "Cardio intenso en bicicleta", 20,
                LocalDate.now().plusDays(4), LocalTime.of(17, 0), LocalTime.of(18, 0), 60,
                "Programado", "Mejorar resistencia cardiovascular", "Alta",
                "/uploads/clases/spinning.png", empleado2, reservasSpinning));

        save(new Clase("Kickboxing Básico", "Defensa personal y cardio", 18,
                LocalDate.now().plusDays(5), LocalTime.of(19, 0), LocalTime.of(20, 0), 60,
                "Programado", "Aprender técnicas de golpeo y defensa", "Alta",
                "/uploads/clases/kickboxing.png", empleado1, reservasKickboxing));

        save(new Clase("Yoga Suave", "Relajación y respiración", 10,
                LocalDate.now().plusDays(6), LocalTime.of(8, 0), LocalTime.of(9, 0), 60,
                "Programado", "Reducir estrés y mejorar flexibilidad", "Baja",
                "/uploads/clases/yoga_suave.png", empleado1, reservasYogaSuave));

        save(new Clase("Body Combat", "Combate coreografiado", 22,
                LocalDate.now().plusDays(7), LocalTime.of(18, 30), LocalTime.of(19, 30), 60,
                "Programado", "Entrenamiento de fuerza y cardio", "Alta",
                "/uploads/clases/body_combat.png", empleado2, reservasBodyCombat));

        save(new Clase("Zumba Fitness", "Cardio y diversión", 25,
                LocalDate.now().plusDays(8), LocalTime.of(10, 30), LocalTime.of(11, 30), 60,
                "Programado", "Divertirse mientras se hace ejercicio", "Media",
                "/uploads/clases/zumba_fitness.png", empleado2, reservasZumbaFitness));

        save(new Clase("Entrenamiento Funcional", "Circuitos para todo el cuerpo", 15,
                LocalDate.now().plusDays(9), LocalTime.of(16, 0), LocalTime.of(17, 0), 60,
                "Programado", "Mejorar fuerza, equilibrio y coordinación", "Alta",
                "/uploads/clases/funcional.png", empleado1, reservasFuncional));
    }

    public List<Clase> findAll() {
        return claseList;
    }

    public Optional<Clase> findById(Integer id) {
        return claseList.stream()
                .filter(p -> p.getClaseId().equals(id))
                .findFirst();
    }

    public Clase save(Clase clase) {
        if (clase.getClaseId() == null) {
            clase.setClaseId(nextId++);
        } else {
            deleteById(clase.getClaseId());
        }
        claseList.add(clase);
        return clase;
    }

    public void deleteById(Integer id) {
        claseList.removeIf(p -> p.getClaseId().equals(id));
    }
}
