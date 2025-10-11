package pe.edu.utp.animalGym.controller.api;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import pe.edu.utp.animalGym.model.Membresia;
import pe.edu.utp.animalGym.service.MembresiaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/membresias")
public class MembresiaApiController {
    @Autowired
    private MembresiaService service;

    @GetMapping
    public ResponseEntity<List<Membresia>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Membresia> findById(@PathVariable Integer id) {
        return service.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Membresia> save(@RequestBody Membresia Membresia) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(Membresia));
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Membresia> update(@PathVariable Integer id,
    // @RequestBody Membresia Membresia) {
    // return ResponseEntity.ok(service.save(Membresia));
    // }
    @PutMapping("/{id}")
    public ResponseEntity<Membresia> update(@PathVariable Integer id, @RequestBody Membresia Membresia) {
        // Aseguramos que el id del path sea el usado
        Membresia.setMembresiaId(id);
        return ResponseEntity.ok(service.save(Membresia));
    }
    // @PutMapping("/{id}")
    // public ResponseEntity<Membresia> update(@PathVariable Integer id,
    // @RequestBody Membresia membresia) {
    // return service.findById(id).map(existing -> {
    // membresia.setMenbresiaId(id);
    // return ResponseEntity.ok(service.save(membresia));
    // }).orElseGet(() -> ResponseEntity.notFound().build());
    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String carpetaUploads = "uploads/Membresias/";
            String nombreArchivo = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path ruta = Paths.get(carpetaUploads + nombreArchivo);

            Files.write(ruta, file.getBytes());

            return ResponseEntity.ok("/uploads/Membresias/" + nombreArchivo);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al subir la imagen");
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Membresia>> buscarPorEstado(@RequestParam Boolean estado) {
        List<Membresia> resultados = service.buscarPorEstado(estado);
        return ResponseEntity.ok(resultados);
    }

    @GetMapping("/buscar/precio")
    public ResponseEntity<List<Membresia>> buscarPorPrecio(
            @RequestParam Double min,
            @RequestParam Double max) {
        List<Membresia> resultados = service.buscarPorPrecio(min, max);
        return ResponseEntity.ok(resultados);
    }

}