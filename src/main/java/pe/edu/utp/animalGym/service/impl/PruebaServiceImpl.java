package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import pe.edu.utp.animalGym.model.Prueba;
import pe.edu.utp.animalGym.repository.PruebaRepository;
import pe.edu.utp.animalGym.service.PruebaService;

public class PruebaServiceImpl implements PruebaService {
  @Autowired
  private PruebaRepository repository;

  @Override
  public List<Prueba> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Prueba> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public Prueba save(Prueba entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
