package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.model.Rol;
import pe.edu.utp.animalGym.model.Usuario;

@Repository
public class UsuarioRepository {

    private List<Usuario> usuarios = new ArrayList<>();
    private Integer nextId = 1;

    public List<Usuario> findAll() {
        return usuarios;
    }

    public UsuarioRepository(RolRepository rolRepository, EmpleadoRepository empleadoRepository) {

        Rol rol1 = rolRepository.findById(1).orElse(null);
        Rol rol2 = rolRepository.findById(2).orElse(null);
        Empleado emp1 = empleadoRepository.findById(1).orElse(null);
        Empleado emp2 = empleadoRepository.findById(2).orElse(null);
        Empleado emp3 = empleadoRepository.findById(3).orElse(null);

        save(new Usuario("Contraseña", rol2, emp1));
        save(new Usuario("Contraseña", rol2, emp2));
        save(new Usuario("Contraseña", rol1, emp3));

    }

    public Optional<Usuario> findById(Integer id) {
        return usuarios.stream()
                .filter(u -> u.getUsuarioId().equals(id))
                .findFirst();
    }

    public Usuario save(Usuario usuario) {
        if (usuario.getUsuarioId() == null) {
            usuario.setUsuarioId(nextId++);
        } else {
            deleteById(usuario.getUsuarioId());
        }
        usuarios.add(usuario);
        return usuario;
    }

    public void deleteById(Integer id) {
        usuarios.removeIf(u -> u.getUsuarioId().equals(id));
    }
}
