package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Ejercicio;

@Repository
public class EjercicioRepository {

    private List<Ejercicio> ejercicioList = new ArrayList<>();

    public EjercicioRepository() {
        save(new Ejercicio("Sentadilla",
                "Ejercicio de piernas",
                "Cuádriceps",
                "Barra"));

        save(new Ejercicio("Prensa de piernas",
                "Ejercicio en máquina para tren inferior",
                "Cuádriceps y glúteos",
                "Máquina de prensa"));

        save(new Ejercicio("Curl de bíceps",
                "Ejercicio de aislamiento para brazos",
                "Bíceps",
                "Mancuernas o barra"));

        save(new Ejercicio("Tríceps en polea",
                "Ejercicio de extensión de codo en polea",
                "Tríceps",
                "Polea"));

        save(new Ejercicio("Press de banca",
                "Ejercicio para desarrollar el pecho",
                "Pectorales",
                "Barra"));

        save(new Ejercicio("Dominadas",
                "Ejercicio de tracción vertical",
                "Dorsales y bíceps",
                "Peso corporal"));
        save(new Ejercicio(7, "Remo con barra",
                "Ejercicio de tracción para espalda",
                "Dorsales y trapecios",
                "Barra"));

        save(new Ejercicio("Elevaciones laterales",
                "Aislamiento de hombros",
                "Deltoides",
                "Mancuernas"));

        save(new Ejercicio("Peso muerto",
                "Ejercicio compuesto para espalda y piernas",
                "Dorsales, glúteos, isquiotibiales",
                "Barra"));

        save(new Ejercicio("Plancha",
                "Ejercicio isométrico para core",
                "Abdominales y core",
                "Peso corporal"));

        save(new Ejercicio("Fondos en paralelas",
                "Ejercicio para tríceps y pecho",
                "Tríceps y pectorales",
                "Barras paralelas"));

        save(new Ejercicio("Zancadas con mancuernas",
                "Ejercicio para piernas y glúteos",
                "Cuádriceps y glúteos",
                "Mancuernas"));

        save(new Ejercicio("Crunch abdominal",
                "Ejercicio para fortalecer abdominales",
                "Abdominales",
                "Peso corporal"));

        save(new Ejercicio("Press militar",
                "Ejercicio para hombros y trapecios",
                "Deltoides y trapecios",
                "Barra o mancuernas"));

        save(new Ejercicio("Remo en polea baja",
                "Ejercicio de tracción horizontal",
                "Dorsales y bíceps",
                "Polea"));

        save(new Ejercicio("Elevación de talones",
                "Ejercicio para gemelos",
                "Gemelos",
                "Peso corporal o máquina"));
    }

    private Integer nextId = 1;

    public List<Ejercicio> findAll() {
        return ejercicioList;
    }

    public Optional<Ejercicio> findById(Integer id) {
        return ejercicioList.stream().filter(p -> p.getEjercicioId() == id).findFirst();
    }

    public Ejercicio save(Ejercicio ejercicio) {
        if (ejercicio.getEjercicioId() == null) {
            ejercicio.setEjercicioId(nextId++);
        } else {
            deleteById(ejercicio.getEjercicioId());
        }

        ejercicioList.add(ejercicio);
        return ejercicio;
    }

    public void deleteById(Integer id) {
        ejercicioList.removeIf(p -> p.getEjercicioId() == id);
    }
}
