package pe.edu.utp.animalGym.service;

import java.util.List;

import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.model.ReservaClase;

public interface ClaseService extends ApiService<Clase> {
    public List<Clase> filtrar(String nombre, String estado, String intensidad);

    Clase eliminarReserva(Integer claseId, Integer reservaId);

    Clase agregarReserva(Integer claseId, ReservaClase reserva);
}
