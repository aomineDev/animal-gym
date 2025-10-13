package pe.edu.utp.animalGym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Usuario;

@Repository

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
