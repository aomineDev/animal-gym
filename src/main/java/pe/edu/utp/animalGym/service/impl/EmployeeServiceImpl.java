package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Employee;
import pe.edu.utp.animalGym.repository.EmployeeRepository;
import pe.edu.utp.animalGym.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    // traer la instancia
    @Autowired
    private EmployeeRepository employee;

    @Override
    public List<Employee> findAll() {
        return employee.findAll();
    }

    @Override
    public Optional<Employee> findById(Integer id) {
        return employee.findById(id);
    }

    @Override
    public Employee save(Employee entity) {
        return employee.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        employee.deleteById(id);
    }

}