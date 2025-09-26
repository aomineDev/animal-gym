package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Empleado;

@Repository
public class EmpleadoRepository {

    private List<Empleado> employeeList = new ArrayList<>();

    private Integer nextId = 5;

    public EmpleadoRepository() {
        save(new Empleado(1, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "https://randomuser.me/api/portraits/men/1.jpg",
                1500, "Anual", "xxx"));
        save(new Empleado(2, "77454651", "Sebastian", "Pereze", "955582873", "Masculino",
                "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "https://randomuser.me/api/portraits/men/1.jpg",
                1500, "Indefinido", "xxx"));
        save(new Empleado(3, "76454651", "Juan", "Carlos", "920582873", "Masculino",
                "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "https://randomuser.me/api/portraits/men/1.jpg",
                1500, "Anual", "xxx"));
        save(new Empleado(4, "76454651", "Tomas", "Torres", "915582873", "Masculino",
                "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "https://randomuser.me/api/portraits/men/1.jpg",
                1500, "Anual", "xxx"));

    }

    public List<Empleado> findAll() {
        return employeeList;
    }

    public Optional<Empleado> findById(Integer id) {
        return employeeList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Empleado save(Empleado empleado) {
        if (empleado.getPersonaId() == null) {
            empleado.setPersonaId(nextId++);
        } else {
            deleteById(empleado.getPersonaId());
        }

        employeeList.add(empleado);
        return empleado;
    }

    public void deleteById(Integer id) {
        employeeList.removeIf(p -> p.getPersonaId() == id);
    }
}
