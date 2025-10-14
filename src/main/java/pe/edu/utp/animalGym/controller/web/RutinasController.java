package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.EjercicioService;
import pe.edu.utp.animalGym.service.SocioService;
import pe.edu.utp.animalGym.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class RutinasController {

  @Autowired
  SocioService socioService;

  @Autowired
  private UsuarioService usuarioService;

  @Autowired
  private EjercicioService ejercicioService;

  @GetMapping("/rutinas")
  public String rutinas(Model model) {
    model.addAttribute("title", "Animal GYM | Rutinas");
    model.addAttribute("content", "rutinas :: content");
    model.addAttribute("modal", "rutinas :: modal");
    model.addAttribute("script", "rutinas :: script");

    model.addAttribute("activePage", "rutinas");
    model.addAttribute("socios", socioService.findAll());
    model.addAttribute("usuarios", usuarioService.findAll());
    model.addAttribute("ejercicios", ejercicioService.findAll());

    return "dashboard";
  }
}
