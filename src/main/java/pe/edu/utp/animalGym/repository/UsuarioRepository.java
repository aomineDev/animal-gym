package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Usuario;

@Repository
public class UsuarioRepository {

    private List<Usuario> usuarios = new ArrayList<>();
    private Integer nextId = 1;

    public List<Usuario> findAll() {
        return usuarios;
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
