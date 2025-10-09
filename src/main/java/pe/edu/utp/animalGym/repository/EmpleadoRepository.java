package pe.edu.utp.animalGym.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {
    @Query("SELECT e FROM Empleado e WHERE LOWER(e.nombre) LIKE LOWER(CONCAT('%', :nombre, '%'))")
    List<Empleado> buscarPorNombre(@Param("nombre") String nombre);
}
