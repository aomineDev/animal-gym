package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Rol;

public interface RolService extends ApiService<Rol> {
    List<Rol> buscarPorNombre(String nombre);

}
