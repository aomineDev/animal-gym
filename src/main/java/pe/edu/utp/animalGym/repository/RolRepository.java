package pe.edu.utp.animalGym.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Rol;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {

    @Query("SELECT r FROM Rol r WHERE LOWER(r.nombreRol) LIKE LOWER(CONCAT('%', :nombre, '%'))")
    List<Rol> buscarPorNombre(@Param("nombre") String nombre);
}