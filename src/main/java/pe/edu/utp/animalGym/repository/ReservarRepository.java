package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Reservar;

@Repository
public class ReservarRepository {

    private List<Reservar> reservas = new ArrayList<>();
    private Integer nextId = 1;

    public List<Reservar> findAll() {
        return reservas;
    }

    public Optional<Reservar> findById(Integer id) {
        return reservas.stream()
                       .filter(r -> r.getReservaId().equals(id))
                       .findFirst();
    }

    public Reservar save(Reservar reserva) {
        if (reserva.getReservaId() == null) {
            reserva.setReservaId(nextId++);
        } else {
            deleteById(reserva.getReservaId());
        }
        reservas.add(reserva);
        return reserva;
    }

    public void deleteById(Integer id) {
        reservas.removeIf(r -> r.getReservaId().equals(id));
    }
}
