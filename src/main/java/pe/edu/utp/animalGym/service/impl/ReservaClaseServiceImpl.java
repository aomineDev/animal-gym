package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.ReservaClase;
import pe.edu.utp.animalGym.repository.ReservaClaseRepository;
import pe.edu.utp.animalGym.service.ReservaClaseService;

@Service
public class ReservaClaseServiceImpl implements ReservaClaseService {
  @Autowired
  private ReservaClaseRepository repository;

  @Override
  public List<ReservaClase> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<ReservaClase> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public ReservaClase save(ReservaClase entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
