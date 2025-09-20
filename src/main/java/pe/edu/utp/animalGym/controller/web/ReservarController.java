package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class ReservarController {
  @GetMapping("/reservar")
  public String reservar(Model model) {
    model.addAttribute("title", "Animal GYM | Reservar");
    model.addAttribute("content", "reservar :: content");
    model.addAttribute("modal", "reservar :: modal");
    model.addAttribute("activePage", "reservar");

    return "layout";
  }
}
