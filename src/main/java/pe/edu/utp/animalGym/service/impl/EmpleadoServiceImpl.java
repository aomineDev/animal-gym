package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.service.EmpleadoService;

@Service
public class EmpleadoServiceImpl implements EmpleadoService {
    // traer la instancia
    @Autowired
    private EmpleadoRepository employee;

    @Override
    public List<Empleado> findAll() {
        return employee.findAll();
    }

    @Override
    public Optional<Empleado> findById(Integer id) {
        return employee.findById(id);
    }

    @Override
    public Empleado save(Empleado entity) {
        return employee.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        employee.deleteById(id);
    }

    @Override
    public List<Empleado> buscarPorNombre(String nombre) {
        return employee.buscarPorNombre(nombre);
    }

}