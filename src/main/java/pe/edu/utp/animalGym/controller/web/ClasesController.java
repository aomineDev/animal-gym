package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.ClaseService;
import pe.edu.utp.animalGym.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ClasesController {
  @Autowired
  private ClaseService service;

  @Autowired
  private UsuarioService usuarioService;

  @GetMapping("/clases")
  public String clase(Model model) {
    
    model.addAttribute("title", "Animal GYM | Clase");

    model.addAttribute("content", "clases :: content");
    model.addAttribute("modal", "clases :: modals");
    model.addAttribute("activePage", "clases");

    model.addAttribute("clases", service.findAll());
    model.addAttribute("usuarios", usuarioService.findAll());

    return "layout";
  }
}
