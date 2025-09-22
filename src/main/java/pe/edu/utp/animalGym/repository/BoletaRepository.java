package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Boleta;

@Repository
public class BoletaRepository {

    private List<Boleta> boletaList = new ArrayList<>();

    private Integer nextId = 1;

    public List<Boleta> findAll() {
        return boletaList;
    }

    public Optional<Boleta> findById(Integer id) {
        return boletaList.stream()
                .filter(b -> b.getBoletaId() == id)
                .findFirst();
    }

    public Boleta save(Boleta boleta) {
        if (boleta.getBoletaId() == null) {
            boleta.setBoletaId(nextId++);
        } else {
            deleteById(boleta.getBoletaId());
        }

        boletaList.add(boleta);
        return boleta;
    }

    public void deleteById(Integer id) {
        boletaList.removeIf(b -> b.getBoletaId() == id);
    }
}
