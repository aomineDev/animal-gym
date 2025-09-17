package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Employee;

@Repository
public class EmployeeRepository {
    private List<Employee> employeeList = new ArrayList<>(List.of(new Employee(1500, "Mensual", "Ingeniero")));

    private Integer nextId = 1;

    public List<Employee> findAll() {
        return employeeList;
    }

    public Optional<Employee> findById(Integer id) {
        return employeeList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Employee save(Employee employee) {
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
