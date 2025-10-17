package pe.edu.utp.animalGym.service;

import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.model.ReservaClase;

public interface ClaseService extends ApiService<Clase> {

    Clase eliminarReserva(Integer claseId, Integer reservaId);

    Clase agregarReserva(Integer claseId, ReservaClase reserva);
}
