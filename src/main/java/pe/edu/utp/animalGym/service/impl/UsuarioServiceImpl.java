package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Usuario;
import pe.edu.utp.animalGym.repository.UsuarioRepository;
import pe.edu.utp.animalGym.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
  @Autowired
  private UsuarioRepository repository;

  @Override
  public List<Usuario> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Usuario> findById(Integer id) {
    return repository.findById(id);
  }

  @Override
  public Usuario save(Usuario entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }
}
