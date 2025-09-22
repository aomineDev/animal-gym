package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Boleta;
import pe.edu.utp.animalGym.model.Empleado;

@Repository
public class BoletaRepository {

    private List<Boleta> boletaList = new ArrayList<>(List.of(
            new Boleta(1, LocalDate.of(2025, 6, 18),
                    LocalTime.of(12, 1, 3),
                    12, 1000, 0, true, null,
                    new Empleado(1, "78945612", "Leonardo", "Murillo", "987456123", "Masculino", null, null, null, 0,
                            null, null)),
            new Boleta(2, LocalDate.of(2025, 6, 18),
                    LocalTime.of(12, 1, 3),
                    12, 100011, 0, true, null,
                    new Empleado(1, "78945612", "Luis", "Fernandez", "987456123", "Masculino", null, null, null, 0,
                            null, null)),
            new Boleta(3, LocalDate.of(2025, 6, 18),
                    LocalTime.of(12, 1, 3),
                    12, 100011, 0, true, null,
                    new Empleado(1, "78945612", "Juan", "x", "987456123", "Masculino", null, null, null, 0,
                            null, null))));
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
