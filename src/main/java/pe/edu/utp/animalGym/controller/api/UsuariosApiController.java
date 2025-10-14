package pe.edu.utp.animalGym.controller.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Rol;
import pe.edu.utp.animalGym.model.Usuario;
import pe.edu.utp.animalGym.service.RolService;
import pe.edu.utp.animalGym.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuariosApiController {

    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> find(@PathVariable Integer id) {
        return usuarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Usuario> saveU(@RequestBody Usuario usuario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        usuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> update(@PathVariable Integer id, @RequestBody Usuario usuario) {
        usuario.setUsuarioId(id);
        return ResponseEntity.ok(usuarioService.save(usuario));
    }
    // @PutMapping("/{id}")
    // public ResponseEntity<Usuario> update(@PathVariable Integer id, @RequestBody
    // Usuario usuario) {
    // Optional<Usuario> usuarioExistenteOpt = usuarioService.findById(id);
    // if (usuarioExistenteOpt.isEmpty()) {
    // return ResponseEntity.notFound().build();
    // }

    // Usuario usuarioExistente = usuarioExistenteOpt.get();
    // usuarioExistente.setClave(usuario.getClave());
    // usuarioExistente.setRol(usuario.getRol());

    // // **Nunca cambiar persona**, solo mantener la existente**
    // usuarioExistente.setPersona(usuarioExistente.getPersona());

    // Usuario updated = usuarioService.save(usuarioExistente);
    // return ResponseEntity.ok(updated);
    // }

}
