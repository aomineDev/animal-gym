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

        List<ReservaClase> reservasParaYoga = reservaClaseRepository.findAll().stream()
                .filter(r -> r.getSocio().getPersonaId() == 1)
                .toList();

        save(new Clase("Yoga Avanzado", "Clase de relajación y flexibilidad", 20,
                LocalDate.now().plusDays(1), LocalTime.of(9, 0), LocalTime.of(10, 0), 60,
                "Programado", "Mejorar elasticidad", "Baja",
                "https://picsum.photos/400/250?random=1", empleado1, reservasParaYoga));

        save(new Clase("Crossfit Intenso", "Entrenamiento de alta intensidad", 15,
                LocalDate.now().plusDays(2), LocalTime.of(18, 0), LocalTime.of(19, 30), 90,
                "En curso", "Mejorar fuerza y resistencia", "Alta",
                "https://picsum.photos/400/250?random=2", empleado2, null));

        save(new Clase("Zumba Energética", "Baile y cardio divertido", 25,
                LocalDate.now().plusDays(3), LocalTime.of(10, 0), LocalTime.of(11, 0), 60,
                "Finalizado", "Mejorar coordinación y cardio", "Media",
                "https://picsum.photos/400/250?random=3", empleado2, null));
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
