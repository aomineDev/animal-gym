package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Empleado;

@Repository
public class EmpleadoRepository {

    private List<Empleado> employeeList = new ArrayList<>(

            List.of(new Empleado(1, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                    "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19), 1500, "Anual",
                    "xxx"),
                    new Empleado(2, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                            "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19), 1500,
                            "Anual",
                            "xxx"),
                    new Empleado(3, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                            "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19), 1500,
                            "Anual",
                            "xxx"),
                    new Empleado(4, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                            "leonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19), 1500,
                            "Anual",
                            "xxx")));

    private Integer nextId = 1;

    public List<Empleado> findAll() {
        return employeeList;
    }

    public Optional<Empleado> findById(Integer id) {
        return employeeList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Empleado save(Empleado employee) {
        if (employee.getPersonaId() == null) {
            employee.setPersonaId(nextId++);
        } else {
            deleteById(employee.getPersonaId());
        }

        employeeList.add(employee);
        return employee;
    }

    public void deleteById(Integer id) {
        employeeList.removeIf(p -> p.getPersonaId() == id);
    }
}
