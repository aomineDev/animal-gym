package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pe.edu.utp.animalGym.service.impl.ClaseServiceImpl;
import pe.edu.utp.animalGym.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ClaseController {
  @Autowired
  private ClaseServiceImpl service;

  @Autowired
  private UsuarioServiceImpl usuarioServiceImpl;

  @GetMapping("/clases")
  public String clase(Model model) {
    model.addAttribute("title", "Animal GYM | Clase");
    model.addAttribute("content", "clase :: content");
    model.addAttribute("modal", "clase :: modals");
    model.addAttribute("activePage", "clases");
    model.addAttribute("clases", service.findAll());
    model.addAttribute("usuarios", usuarioServiceImpl.findAll());

    return "layout";
  }
}
