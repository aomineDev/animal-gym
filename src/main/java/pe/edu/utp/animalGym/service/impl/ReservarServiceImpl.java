package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Reservar;
import pe.edu.utp.animalGym.repository.ReservarRepository;
import pe.edu.utp.animalGym.service.ReservarService;

@Service
public class ReservarServiceImpl implements ReservarService {
  @Autowired
  private ReservarRepository repository;

  @Override
  public List<Reservar> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Reservar> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public Reservar save(Reservar entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
