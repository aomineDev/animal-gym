package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Empleado;

public interface EmpleadoService extends ApiService<Empleado> {
    List<Empleado> buscarPorNombre(String nombre);

}
