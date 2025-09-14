package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping("/home")
  public String home(Model model) {
    model.addAttribute("title", "Animal GYM | Home");
    model.addAttribute("content", "home :: content");
    model.addAttribute("modal", "home :: content");
    model.addAttribute("activePage", "home");

    return "layout";
  }
}
