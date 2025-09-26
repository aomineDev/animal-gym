package pe.edu.utp.animalGym.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Socio;
import pe.edu.utp.animalGym.service.SocioService;

@RestController
@RequestMapping("/api/socios")
public class SociosApiController {

    @Autowired
    SocioService socioService;

    @GetMapping
    public ResponseEntity<List<Socio>> findAll() {
        return ResponseEntity.ok(socioService.findAll());
    }
}