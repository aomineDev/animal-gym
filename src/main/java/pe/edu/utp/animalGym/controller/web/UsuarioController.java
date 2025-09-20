package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class UsuarioController {
  @GetMapping("/usuario")
  public String usuario(Model model) {
    model.addAttribute("title", "Animal GYM | Usuario");
    model.addAttribute("content", "usuario :: content");
    model.addAttribute("modal", "usuario :: modal");
    model.addAttribute("activePage", "usuario");

    return "layout";
  }
}
