package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Ejercicio;

@Repository
public class EjercicioRepository {

    private List<Ejercicio> ejercicioList = new ArrayList<>(List.of(
            new Ejercicio("Sentadilla",
                    "Ejercicio de piernas",
                    "Cuádriceps",
                    "Barra")));

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
