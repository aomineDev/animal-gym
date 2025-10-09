package pe.edu.utp.animalGym.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Rol;
import pe.edu.utp.animalGym.service.impl.RolServiceImpl;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/roles")
public class RolesApiController {
    @Autowired
    private RolServiceImpl serviceRol;

    public RolesApiController(RolServiceImpl serviceRol) {
        this.serviceRol = serviceRol;
    }

    @GetMapping
    public ResponseEntity<List<Rol>> findAll() {
        return ResponseEntity.ok(serviceRol.findAll());
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Rol>> buscarPorNombre(@RequestParam String nombre) {
        List<Rol> resultados = serviceRol.buscarPorNombre(nombre);
        return ResponseEntity.ok(resultados);
    }

}
