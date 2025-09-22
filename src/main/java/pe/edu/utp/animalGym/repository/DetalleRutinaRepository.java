package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.DetalleRutina;

@Repository
public class DetalleRutinaRepository {

    private List<DetalleRutina> detalleRutinaList = new ArrayList<>();

    private Integer nextId = 1;

    public List<DetalleRutina> findAll() {
        return detalleRutinaList;
    }

    public Optional<DetalleRutina> findById(Integer id) {
        return detalleRutinaList.stream()
                .filter(d -> d.getDetalleRutinaId() == id)
                .findFirst();
    }

    public DetalleRutina save(DetalleRutina detalleRutina) {
        if (detalleRutina.getDetalleRutinaId() == null) {
            detalleRutina.setDetalleRutinaId(nextId++);
        } else {
            deleteById(detalleRutina.getDetalleRutinaId());
        }

        detalleRutinaList.add(detalleRutina);
        return detalleRutina;
    }

    public void deleteById(Integer id) {
        detalleRutinaList.removeIf(d -> d.getDetalleRutinaId() == id);
    }
}
