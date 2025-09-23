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
    private Integer usuarioId;
    private String contraseña;
    private Rol rol;
    private Person persona;

    public Usuario(String contraseña, Rol rol, Person persona) {
        this.contraseña = contraseña;
        this.rol = rol;
        this.persona = persona;
    }
}
