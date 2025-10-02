package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EjercicioServiceImpl;
import pe.edu.utp.animalGym.service.impl.SocioServiceImpl;
import pe.edu.utp.animalGym.service.impl.UsuarioServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class RutinasController {

  @Autowired
  SocioServiceImpl socioServiceImpl;

  @Autowired
  private UsuarioServiceImpl usuarioServiceImpl;

  @Autowired
  private EjercicioServiceImpl ejercicioServiceImpl;

  @GetMapping("/rutinas")
  public String rutinas(Model model) {
    model.addAttribute("title", "Animal GYM | Rutinas");
    model.addAttribute("content", "rutinas :: content");
    model.addAttribute("modal", "rutinas :: modals");
    model.addAttribute("activePage", "rutinas");
    model.addAttribute("socios", socioServiceImpl.findAll());
    model.addAttribute("usuarios", usuarioServiceImpl.findAll());
    model.addAttribute("ejercicios", ejercicioServiceImpl.findAll());

    return "layout";
  }
}
