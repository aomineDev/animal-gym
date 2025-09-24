package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class RutinasController {
  @GetMapping("/rutinas")
  public String rutinas(Model model) {
    model.addAttribute("title", "Animal GYM | Rutinas");
    model.addAttribute("content", "rutinas :: content");
    model.addAttribute("modal", "rutinas :: modals");
    model.addAttribute("activePage", "rutinas");

    return "layout";
  }
}
