package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rol;
import pe.edu.utp.animalGym.model.Usuario;
import pe.edu.utp.animalGym.model.UsuarioDTO;
import pe.edu.utp.animalGym.repository.EmpleadoRepository;
import pe.edu.utp.animalGym.repository.RolRepository;
import pe.edu.utp.animalGym.repository.UsuarioRepository;
import pe.edu.utp.animalGym.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
  @Autowired
  private UsuarioRepository repository;
  @Autowired
  private RolRepository rolRepository;

  @Autowired
  private EmpleadoRepository empleadoRepository;

  @Autowired
  private EntityManager entityManager;

  @Override
  public List<Usuario> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Usuario> findById(Integer id) {
    return repository.findById(id);
  }

  // @Override
  // @Transactional
  // public Usuario save(Usuario entity) {
  // Usuario usuario = repository.save(entity);

  // entityManager.refresh(usuario);

  // return usuario;
  // }
  @Override
  @Transactional
  public Usuario save(Usuario entity) {
    // Si tiene ID, es UPDATE
    if (entity.getUsuarioId() != null) {
      Usuario existente = repository.findById(entity.getUsuarioId())
          .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

      existente.setClave(entity.getClave());

      if (entity.getRol() != null && entity.getRol().getRolId() != null) {
        Rol rol = rolRepository.findById(entity.getRol().getRolId())
            .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        existente.setRol(rol);
      }

      entityManager.flush();
      entityManager.refresh(existente);
      return existente;
    }

    // Si no tiene ID, es CREATE
    Usuario usuario = repository.save(entity);
    entityManager.refresh(usuario);
    return usuario;
  }

  @Override
  public void deleteById(Integer id) {
    repository.deleteById(id);
  }

  // @Override
  // public Usuario saveUsuario(UsuarioDTO dto) {
  // Usuario usuario = new Usuario();
  // usuario.setClave(dto.getClave());

  // Rol rol = rolRepository.findById(dto.getRolId())
  // .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
  // usuario.setRol(rol);

  // Empleado empleado = empleadoRepository.findById(dto.getPersonaId())
  // .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
  // usuario.setPersona(empleado);

  // return repository.save(usuario);
  // }
}
