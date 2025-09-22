package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.repository.RutinaRepository;
import pe.edu.utp.animalGym.service.RutinaService;

@Service
public class RutinaServiceImpl implements RutinaService {

    @Autowired
    private RutinaRepository repository;

    @Override
    public List<Rutina> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Rutina> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Rutina save(Rutina entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
