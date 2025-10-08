package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Ejercicio;

public interface EjercicioService extends ApiService<Ejercicio> {
    List<Ejercicio> buscarPorNombre(String nombre);
}
