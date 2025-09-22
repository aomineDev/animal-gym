package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Rutina;

@Repository
public class RutinaRepository {

    private List<Rutina> rutinaList = new ArrayList<>();

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
