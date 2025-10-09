package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EjercicioServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class EjercicioController {

  @Autowired
  private EjercicioServiceImpl ejercicioRepository;

  @GetMapping("/ejercicio")
  public String ejercicio(Model model) {

    model.addAttribute("title", "Animal GYM | Ejercicio");
    model.addAttribute("content", "ejercicio :: content");
    model.addAttribute("modal", "ejercicio :: modal");
    model.addAttribute("script", "");

    model.addAttribute("activePage", "ejercicios");

    model.addAttribute("ejercicios", ejercicioRepository.findAll());

    return "dashboard";
  }
}
