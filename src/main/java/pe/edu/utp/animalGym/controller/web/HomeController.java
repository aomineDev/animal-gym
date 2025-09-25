package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.PruebaService;

@Controller
public class HomeController {
  @Autowired
  private PruebaService service;

  @GetMapping("/home")
  public String home(Model model) {
    model.addAttribute("title", "Animal GYM | Home");
    model.addAttribute("content", "home :: content");
    model.addAttribute("modal", "home :: modal");
    model.addAttribute("activePage", "home");
    model.addAttribute("pruebas", service.findAll());

    return "layout";
  }
}
