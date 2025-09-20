package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class ReservarClaseController {
  @GetMapping("/reservarclase")
  public String reservarclase(Model model) {
    model.addAttribute("title", "Animal GYM | ReservarClase");
    model.addAttribute("content", "reservarclase :: content");
    model.addAttribute("modal", "reservarclase :: modal");
    model.addAttribute("activePage", "reservarclase");

    return "layout";
  }
}
