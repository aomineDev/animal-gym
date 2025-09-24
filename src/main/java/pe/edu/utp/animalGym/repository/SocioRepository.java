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
                men1,
                rutinas));

        save(new Socio(
                2,
                "71597595", "Jhordan", "Calixto", "987654321", "M", "calixto@email.com",
                LocalDate.of(1990, 5, 15),
                LocalDate.of(2023, 1, 1),
                LocalDate.of(2024, 1, 1),
                true,
                100,
                70.5,
                1.75,
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