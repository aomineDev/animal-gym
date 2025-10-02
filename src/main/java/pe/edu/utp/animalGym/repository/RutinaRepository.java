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
        Ejercicio pressBanca = ejercicioRepository.findById(5).orElseThrow();
        Ejercicio dominadas = ejercicioRepository.findById(6).orElseThrow();
        Ejercicio remoBarra = ejercicioRepository.findById(7).orElseThrow();
        Ejercicio elevacionesLaterales = ejercicioRepository.findById(8).orElseThrow();
        Ejercicio pesoMuerto = ejercicioRepository.findById(9).orElseThrow();
        Ejercicio plancha = ejercicioRepository.findById(10).orElseThrow();

        // --------- Rutina de Piernas ----------
        ArrayList<DetalleRutina> detallesPierna = new ArrayList<>();
        detallesPierna.add(new DetalleRutina(1, "Lunes", 4, 12, 40, 200, 90, sentadilla));
        detallesPierna.add(new DetalleRutina(2, "Miércoles", 4, 10, 80, 250, 120, prensa));
        detallesPierna.add(new DetalleRutina(3, "Viernes", 3, 15, 20, 100, 60, pesoMuerto));

        Rutina rutinaPierna = new Rutina(
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
        detallesBrazo.add(new DetalleRutina(4, "Martes", 4, 12, 15, 100, 60, curlBiceps));
        detallesBrazo.add(new DetalleRutina(5, "Jueves", 4, 12, 20, 120, 60, tricepsPolea));
        detallesBrazo.add(new DetalleRutina(6, "Viernes", 3, 12, 10, 80, 45, elevacionesLaterales));

        Rutina rutinaBrazo = new Rutina(
                "Rutina de Brazos",
                "Rutina para hipertrofia de bíceps y tríceps",
                "Aumentar masa muscular en brazos",
                LocalDate.now(),
                LocalDate.now().plusMonths(1),
                entrenador2,
                detallesBrazo);
        save(rutinaBrazo);

        // --------- Rutina de Pecho ----------
        ArrayList<DetalleRutina> detallesPecho = new ArrayList<>();
        detallesPecho.add(new DetalleRutina(7, "Lunes", 4, 12, 40, 200, 90, pressBanca));
        detallesPecho.add(new DetalleRutina(8, "Miércoles", 4, 15, 20, 100, 60, dominadas));

        Rutina rutinaPecho = new Rutina(
                "Rutina de Pecho y Espalda",
                "Rutina para fortalecer pecho y dorsales",
                "Mejorar fuerza y definición",
                LocalDate.now(),
                LocalDate.now().plusMonths(2),
                entrenador1,
                detallesPecho);
        save(rutinaPecho);

        // --------- Rutina Core ----------
        ArrayList<DetalleRutina> detallesCore = new ArrayList<>();
        detallesCore.add(new DetalleRutina(9, "Martes", 3, 30, 0, 0, 60, plancha));
        detallesCore.add(new DetalleRutina(10, "Jueves", 3, 20, 0, 0, 45, elevacionesLaterales));

        Rutina rutinaCore = new Rutina(
                "Rutina de Core",
                "Fortalecimiento de zona abdominal y core",
                "Mejorar estabilidad y fuerza abdominal",
                LocalDate.now(),
                LocalDate.now().plusMonths(1),
                entrenador2,
                detallesCore);
        save(rutinaCore);

        // --------- Rutina Full Body ----------
        ArrayList<DetalleRutina> detallesFull = new ArrayList<>();
        detallesFull.add(new DetalleRutina(11, "Lunes", 3, 12, 40, 200, 90, sentadilla));
        detallesFull.add(new DetalleRutina(12, "Miércoles", 3, 12, 20, 120, 60, pressBanca));
        detallesFull.add(new DetalleRutina(13, "Viernes", 3, 12, 30, 150, 75, remoBarra));

        Rutina rutinaFull = new Rutina(
                "Rutina Full Body",
                "Ejercicios para todo el cuerpo",
                "Mejorar fuerza general y resistencia",
                LocalDate.now(),
                LocalDate.now().plusMonths(3),
                entrenador1,
                detallesFull);
        save(rutinaFull);
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

}
