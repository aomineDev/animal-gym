package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

  @Override
  public Usuario saveUsuario(UsuarioDTO dto) {
    Usuario usuario = new Usuario();
    usuario.setClave(dto.getClave());

    Rol rol = rolRepository.findById(dto.getRolId())
        .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
    usuario.setRol(rol);

    Empleado empleado = empleadoRepository.findById(dto.getPersonaId())
        .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
    usuario.setPersona(empleado);

    return repository.save(usuario);
  }
}
