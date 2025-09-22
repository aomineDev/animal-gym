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

  @GetMapping("/clases")
  public String clase(Model model) {
    model.addAttribute("title", "Animal GYM | Clase");
    model.addAttribute("content", "clase :: content");
    model.addAttribute("modal", "clase :: modals");
    model.addAttribute("activePage", "clases");
    model.addAttribute("clases", service.findAll());

    return "layout";
  }
}
