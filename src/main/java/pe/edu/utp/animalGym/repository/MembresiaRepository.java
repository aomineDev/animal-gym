package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import pe.edu.utp.animalGym.model.Membresia;

@Repository
public class MembresiaRepository {

    private List<Membresia> membershipList = new ArrayList<>();
    private Integer nextId = 3;

    public MembresiaRepository(){

        save(new Membresia(1, "Basico", "Acceso libre a máquinas de cardio y pesas. No incluye clases grupales.",
                     28, 299, 200, LocalDate.of(2022, 12, 12),
                  LocalDate.of(2000, 12, 9), "/uploads/Membresias/1759392706679_a6.png", true, 140));
        save(new Membresia(2, "Premium",
                            "Acceso completo a todo el gimnasio, incluye clases grupales, sauna y asesoría personalizada.",
                            30, 300, 150, LocalDate.of(2025, 4, 12),
                            LocalDate.of(2025, 12, 19), "/uploads/Membresias/1759392500047_a7.png", false, 100));
        save(new Membresia(3, "Familiar",
                            "Acceso para 3 miembros de la familia, incluye máquinas, clases grupales y descuentos en nutrición.",
                            90, 750,600,
                            LocalDate.of(2025, 1, 10),
                            LocalDate.of(2025, 2, 10),
                            "/uploads/Membresias/1759392766407_a5.png",
                            true, 200));

        save(new Membresia(4, "Estudiantil",
                            "Acceso completo con descuento exclusivo para estudiantes universitarios, incluye clases grupales.",
                            60, 400, 300,
                            LocalDate.of(2025, 3, 1),
                            LocalDate.of(2025, 5, 1),
                            "/uploads/Membresias/1759392532151_a4.png",
                            true, 120));

        save(new Membresia(5, "Corporativa",
                            "Plan especial para empresas: acceso para grupos, incluye clases, área de coworking fitness y descuentos.",
                            180, 1200, 950,
                            LocalDate.of(2025, 6, 15),
                            LocalDate.of(2025, 7, 15),
                            "/uploads/Membresias/1759392779607_a9.png",
                            false, 300));
    }

    public List<Membresia> findAll() {
        return membershipList;
    }

    public Optional<Membresia> findById(Integer id) {
        return membershipList.stream().filter(m -> m.getMenbresiaId() == id).findFirst();
    }

    public Membresia save(Membresia membership) {
        if (membership.getMenbresiaId() == null || membership.getMenbresiaId() <= 0) {
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
