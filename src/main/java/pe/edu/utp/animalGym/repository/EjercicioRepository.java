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
        save(new Ejercicio(1,"Sentadilla",
                "Ejercicio de piernas",
                "Cuádriceps",
                "Barra"));

        save(new Ejercicio(2,"Prensa de piernas",
                "Ejercicio en máquina para tren inferior",
                "Cuádriceps y glúteos",
                "Máquina de prensa"));

        save(new Ejercicio(3,"Curl de bíceps",
                "Ejercicio de aislamiento para brazos",
                "Bíceps",
                "Mancuernas o barra"));

        save(new Ejercicio(4,"Tríceps en polea",
                "Ejercicio de extensión de codo en polea",
                "Tríceps",
                "Polea"));

        save(new Ejercicio(5,"Press de banca",
                "Ejercicio para desarrollar el pecho",
                "Pectorales",
                "Barra"));

        save(new Ejercicio(6,"Dominadas",
                "Ejercicio de tracción vertical",
                "Dorsales y bíceps",
                "Peso corporal"));
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
