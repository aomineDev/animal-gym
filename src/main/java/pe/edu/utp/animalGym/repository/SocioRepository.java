package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Membresia;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;

@Repository
public class SocioRepository {

    private List<Socio> socioList = new ArrayList<>();
    private Integer nextId = 3;

    public SocioRepository(MembresiaRepository membresiaRepository,
            RutinaRepository rutinaRepository) {

        Membresia men1 = membresiaRepository.findById(1).orElse(null);
        Membresia men2 = membresiaRepository.findById(2).orElse(null);
        Membresia men3 = membresiaRepository.findById(2).orElse(null);

        List<Rutina> rutinas = new ArrayList<>();
        rutinas.add(rutinaRepository.findById(1).orElse(null));
        rutinas.add(rutinaRepository.findById(2).orElse(null));

        save(new Socio(
                1,
                "12345678", "Juan", "Perez", "987654321", "M", "juan.perez@email.com",
                LocalDate.of(1990, 5, 15),
                LocalDate.of(2023, 1, 1),
                LocalDate.of(2024, 1, 1),
                true,
                100,
                70.5,
                1.75,
                "https://picsum.photos/50/50?random=1",
                men1,
                rutinas));

        save(new Socio(
                2,
                "87654321", "Maria", "Lopez", "912345678", "F", "maria.lopez@email.com",
                LocalDate.of(1995, 8, 20),
                LocalDate.of(2023, 3, 10),
                LocalDate.of(2024, 3, 10),
                true,
                200,
                60.0,
                1.65,
                "https://picsum.photos/50/50?random=2",
                men2,
                rutinas));

        save(new Socio(
                3,
                "45678912", "Carlos", "Ramirez", "987321654", "M", "carlos.ramirez@email.com",
                LocalDate.of(1988, 12, 5),
                LocalDate.of(2022, 11, 15),
                LocalDate.of(2023, 11, 15),
                false,
                150,
                80.0,
                1.80,
                "https://picsum.photos/50/50?random=3",
                men3,
                rutinas));

        save(new Socio(
                4,
                "74185296", "Lucia", "Fernandez", "965874123", "F", "lucia.fernandez@email.com",
                LocalDate.of(2000, 2, 14),
                LocalDate.of(2023, 5, 25),
                LocalDate.of(2024, 5, 25),
                true,
                120,
                55.0,
                1.60,
                "https://picsum.photos/50/50?random=4",
                men1,
                rutinas));

        save(new Socio(
                5,
                "71597595", "Jhordan", "Calixto", "987654321", "M", "calixto@email.com",
                LocalDate.of(1990, 5, 15),
                LocalDate.of(2023, 1, 1),
                LocalDate.of(2024, 1, 1),
                true,
                100,
                70.5,
                1.75,
                "https://picsum.photos/50/50?random=4",
                men1,
                null));
    }

    public List<Socio> findAll() {
        return socioList;
    }

    public Optional<Socio> findById(Integer id) {
        return socioList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Socio save(Socio socio) {
        if (socio.getPersonaId() == null) {
            socio.setPersonaId(nextId++);
        } else {
            deleteById(socio.getPersonaId());
        }
        socioList.add(socio);
        return socio;
    }

    public void deleteById(Integer id) {
        socioList.removeIf(p -> p.getPersonaId() == id);
    }

}