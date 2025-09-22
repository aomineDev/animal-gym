package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Ejercicio;
import pe.edu.utp.animalGym.repository.EjercicioRepository;
import pe.edu.utp.animalGym.service.EjercicioService;

@Service
public class EjercicioServiceImpl implements EjercicioService {

    @Autowired
    private EjercicioRepository repository;

    @Override
    public List<Ejercicio> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Ejercicio> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Ejercicio save(Ejercicio entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
