package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Prueba {
  private Integer id;
  private String name;

  public Prueba(String name) {
    this.name = name;
  }
}
