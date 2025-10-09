package pe.edu.utp.animalGym.controller.api;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Boleta;
import pe.edu.utp.animalGym.service.BoletaService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/boletas")
public class BoletaApiController {
    @Autowired
    private BoletaService service;

    // para verr con el tunderClient
    @GetMapping
    public ResponseEntity<List<Boleta>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Boleta>> buscarPorFechaEmision(@RequestParam LocalDate fecha) {
        List<Boleta> resultados = service.buscarPorFechaEmision(fecha);
        return ResponseEntity.ok(resultados);
    }

}
