package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Clase;

public interface ClaseService extends ApiService<Clase> {
    public List<Clase> filtrar(String nombre, String estado, String intensidad);
}
