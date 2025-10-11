package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class RolesController {
  @GetMapping("/rol")
  public String rol(Model model) {
    model.addAttribute("title", "Animal GYM | Rol");
    model.addAttribute("content", "rol :: content");
    model.addAttribute("modal", "rol :: modal");
    model.addAttribute("script", "");

    model.addAttribute("activePage", "rol");

    return "dashboard";
  }
}
