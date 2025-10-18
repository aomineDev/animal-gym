package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.ClaseService;
import pe.edu.utp.animalGym.service.MembresiaService;

@Controller
public class LandingController {

  @Autowired
  ClaseService claseService;

  @Autowired
  MembresiaService membresiaService;

  @GetMapping("/landing")
  public String index(Model model) {
    model.addAttribute("content", "landing :: content");
    model.addAttribute("clases", claseService.findAll());
    model.addAttribute("membresias", membresiaService.findAll());

    return "index";
  }

}
