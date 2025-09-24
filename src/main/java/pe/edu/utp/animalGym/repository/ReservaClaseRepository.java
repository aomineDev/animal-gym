package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.ReservaClase;
import pe.edu.utp.animalGym.model.Socio;

@Repository
public class ReservaClaseRepository {

    private List<ReservaClase> reservas = new ArrayList<>();
    private Integer nextId = 1;

    public List<ReservaClase> findAll() {
        return reservas;
    }

    public ReservaClaseRepository(SocioRepository socioRepository) {

        Socio socio1 = socioRepository.findById(1).orElseThrow();

        save(new ReservaClase(LocalDate.now(), true, socio1));

    }

    public Optional<ReservaClase> findById(Integer id) {
        return reservas.stream()
                .filter(r -> r.getReservaClaseId().equals(id))
                .findFirst();
    }

    public ReservaClase save(ReservaClase reserva) {
        if (reserva.getReservaClaseId() == null) {
            reserva.setReservaClaseId(nextId++);
        } else {
            deleteById(reserva.getReservaClaseId());
        }
        reservas.add(reserva);
        return reserva;
    }

    public void deleteById(Integer id) {
        reservas.removeIf(r -> r.getReservaClaseId().equals(id));
    }
}
