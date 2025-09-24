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

    private List<Boleta> boletaList = new ArrayList<>();
    private Integer nextId = 1;

    public BoletaRepository(EmpleadoRepository empleadoRepository, SocioRepository socioRepository) {
        Empleado empleado1 = empleadoRepository.findById(1).orElseThrow();
        Empleado empleado2 = empleadoRepository.findById(2).orElseThrow();
        // Socio socio1 = socioRepository.findById(1).orElseThrow();
        save(new Boleta(LocalDate.of(2024, 1, 12), LocalTime.of(12, 12, 12), 189, 1506, 19, false, null, empleado1));
        save(new Boleta(LocalDate.of(2024, 1, 12), LocalTime.of(12, 12, 12), 180, 100, 15, false, null, empleado2));
    }

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
