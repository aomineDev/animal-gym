package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.ClaseServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;

// import pe.edu.utp.animalGym.model.Clase;
// import pe.edu.utp.animalGym.model.Empleado;

// import java.time.LocalDate;
// import java.time.LocalTime;
// import java.util.ArrayList;
// import java.util.List;

import org.springframework.stereotype.Controller;

@Controller
public class ClaseController {
  @Autowired
  private ClaseServiceImpl service;
  @GetMapping("/clase")
  public String clase(Model model) {
    model.addAttribute("title", "Animal GYM | Clase");
    model.addAttribute("content", "clase :: content");
    model.addAttribute("modal", "clase :: modal");
    model.addAttribute("activePage", "clase");
    model.addAttribute("clases", service.findAll());
    
    return "layout";
    // List<Clase> clases = new ArrayList<>();

    // Empleado empleado1 = new Empleado();
    // empleado1.setNombre("Juan Pérez");
    // Empleado empleado2 = new Empleado();
    // empleado2.setNombre("María Gómez");

    // clases.add(new Clase(1, "Yoga Avanzado", "Clase de relajación y flexibilidad", 20,
    //     LocalDate.now().plusDays(1), LocalTime.of(9, 0), LocalTime.of(10, 0), 60,
    //     "Programado", "Mejorar elasticidad", "Baja", "https://picsum.photos/400/250?random=1", empleado1));

    // clases.add(new Clase(2, "Crossfit Intenso", "Entrenamiento de alta intensidad", 15,
    //     LocalDate.now().plusDays(2), LocalTime.of(18, 0), LocalTime.of(19, 30), 90,
    //     "En curso", "Mejorar fuerza y resistencia", "Alta", "https://picsum.photos/400/250?random=2", empleado2));

    // clases.add(new Clase(3, "Zumba Energética", "Baile y cardio divertido", 25,
    //     LocalDate.now().plusDays(3), LocalTime.of(10, 0), LocalTime.of(11, 0), 60,
    //     "Finalizado", "Mejorar coordinación y cardio", "Media", "https://picsum.photos/400/250?random=3", empleado1));

    // model.addAttribute("clases", clases);
  }
}
