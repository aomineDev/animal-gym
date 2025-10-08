package pe.edu.utp.animalGym.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.utp.animalGym.model.Clase;

@Repository
public interface ClaseRepository extends JpaRepository<Clase, Integer> {

    @Query("""
            SELECT c FROM Clase c
            WHERE (:nombre IS NULL OR LOWER(c.nombre) LIKE LOWER(CONCAT('%', :nombre, '%')))
            AND (:estado IS NULL OR c.estado = :estado)
            AND (:intensidad IS NULL OR c.intensidad = :intensidad)
            """)
    List<Clase> filtrar(@Param("nombre") String nombre, @Param("estado") String estado,
            @Param("intensidad") String intensidad);

}