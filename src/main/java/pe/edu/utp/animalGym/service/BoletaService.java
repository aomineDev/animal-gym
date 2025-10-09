package pe.edu.utp.animalGym.service;

import java.time.LocalDate;
import java.util.List;

import pe.edu.utp.animalGym.model.Boleta;

public interface BoletaService extends ApiService<Boleta> {
    List<Boleta> buscarPorFechaEmision(LocalDate fecha);

}
