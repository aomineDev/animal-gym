package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import pe.edu.utp.animalGym.model.Membresia;

@Repository
public class MembresiaRepository {

    private List<Membresia> membershipList = new ArrayList<>(
            List.of(new Membresia(1, "Platinium", "Ejercicio del mejor", 28, 299, 200, LocalDate.of(2022, 12, 12),
                    LocalDate.of(2000, 12, 9)),
                    new Membresia(1, "Basico", "Ejercicio", 30, 300, 150, LocalDate.of(2025, 4, 12),
                            LocalDate.of(2025, 12, 19))));
    private Integer nextId = 1;

    public List<Membresia> findAll() {
        return membershipList;
    }

    public Optional<Membresia> findById(Integer id) {
        return membershipList.stream().filter(m -> m.getMenbresiaId() == id).findFirst();
    }

    public Membresia save(Membresia membership) {
        if (membership.getMenbresiaId() == null) {
            membership.setMenbresiaId(nextId++);
        } else {
            deleteById(membership.getMenbresiaId());
        }
        membershipList.add(membership);
        return membership;
    }

    public void deleteById(Integer id) {
        membershipList.removeIf(m -> m.getMenbresiaId() == id);
    }

}
