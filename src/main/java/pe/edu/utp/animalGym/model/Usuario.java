package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Entity
@Getter 
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Usuario {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer usuarioId;
    private String contrasena;
    //@ManyToOne
    //@JoinColumn(name = "rolId", nullable = false)
    private Rol rol;
    //@OneToOne
    //@JoinColumn(name = "personaId", nullable = false)
    private Person persona;
}
