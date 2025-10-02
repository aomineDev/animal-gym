package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Usuario {
    private Integer usuarioId;
    private String contraseña;
    private Rol rol;
    private Persona persona;

    public Usuario(String contraseña, Rol rol, Persona persona) {
        this.contraseña = contraseña;
        this.rol = rol;
        this.persona = persona;
    }
}
