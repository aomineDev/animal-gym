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

    public UsuarioRepository(EmpleadoRepository empleadoRepository, RolRepository rolRepository) {

        Rol rol1 = rolRepository.findById(1).orElse(null);
        Rol rol2 = rolRepository.findById(2).orElse(null);

        Empleado emp1 = empleadoRepository.findById(1).orElse(null);
        Empleado emp2 = empleadoRepository.findById(2).orElse(null);
        Empleado emp3 = empleadoRepository.findById(3).orElse(null);
        Empleado emp4 = empleadoRepository.findById(4).orElse(null);
        Empleado emp5 = empleadoRepository.findById(5).orElse(null);

        Empleado emp6 = empleadoRepository.findById(6).orElse(null);
        Empleado emp7 = empleadoRepository.findById(7).orElse(null);
        Empleado emp8 = empleadoRepository.findById(8).orElse(null);
        Empleado emp9 = empleadoRepository.findById(9).orElse(null);
        Empleado emp10 = empleadoRepository.findById(10).orElse(null);
        // usuario1
        save(new Usuario(
                "123456", rol2, emp1));
        // usuario2
        save(new Usuario(
                "123456", rol2, emp2));
        // usuario3
        save(new Usuario(
                "123456", rol2, emp3));
        // usuario4
        save(new Usuario(
                "123456", rol2, emp4));
        save(new Usuario(
                "123456", rol2, emp5));
        save(new Usuario(
                "123456", rol2, emp6));
        save(new Usuario(
                "123456", rol2, emp7));
        save(new Usuario(
                "123456", rol1, emp8));
        save(new Usuario(
                "123456", rol1, emp9));
        save(new Usuario(
                "123456", rol2, emp10));

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
