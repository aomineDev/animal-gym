package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Membresia;

public interface MembresiaService extends ApiService<Membresia> {
  List<Membresia> buscarPorEstado(Boolean estado);

  List<Membresia> buscarPorPrecio(Double precioMin, Double precioMax);
}
