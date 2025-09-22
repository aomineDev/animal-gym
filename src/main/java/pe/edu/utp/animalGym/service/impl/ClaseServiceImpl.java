package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.repository.ClaseRepository;
import pe.edu.utp.animalGym.service.ClaseService;

@Service
public class ClaseServiceImpl implements ClaseService {
  @Autowired
  private ClaseRepository repository;

  @Override
  public List<Clase> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Clase> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public Clase save(Clase entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
