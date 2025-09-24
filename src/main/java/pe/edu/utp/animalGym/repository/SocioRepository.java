package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Membresia;
import pe.edu.utp.animalGym.model.Socio;

@Repository
public class SocioRepository {

    private List<Socio> socioList = new ArrayList<>();
    private Integer nextId = 2;

    public SocioRepository() {
        save(new Socio(
                1,
                "12345678", "Juan", "Perez", "987654321", "M", "juan.perez@email.com",
                LocalDate.of(1990, 5, 15), LocalDate.of(2023, 1, 1),
                LocalDate.of(2024, 1, 1),
                true,
                100,
                70.5,
                1.75,
                null));

    }

    public List<Socio> findAll() {
        return socioList;
    }

    public SocioRepository(MembresiaRepository membresiaRepository) {
        Membresia men1 = membresiaRepository.findById(1).orElse(null);
        save(new Socio(1, "765456", "Juan", "pepe", "987678767", "Masculino", "leo@gmail.com",
                LocalDate.of(1990, 9, 12), LocalDate.of(2025, 12, 12), LocalDate.of(2030, 12, 3), true, 200, 40,
                175,
                men1));
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