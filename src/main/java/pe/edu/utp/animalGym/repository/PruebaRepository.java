package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Prueba;

@Repository
public class PruebaRepository {
  private List<Prueba> pruebaList = new ArrayList<>();
  private Integer nextId = 1;

  public PruebaRepository() {
  }

  public List<Prueba> findAll() {
    return pruebaList;
  }

  public Optional<Prueba> findById(Integer id) {
    return pruebaList.stream().filter(p -> p.getId() == id).findFirst();
  }

  public Prueba save(Prueba prueba) {
    if (prueba.getId() == null) {
      prueba.setId(nextId++);
    } else {
      deleteById(prueba.getId());
    }

    pruebaList.add(prueba);
    return prueba;
  }

  public void deleteById(Integer id) {
    pruebaList.removeIf(p -> p.getId() == id);
  }
}
