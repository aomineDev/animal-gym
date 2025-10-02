package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
  @GetMapping("/login")
  public String login(Model model) {
    model.addAttribute("title", "Animal GYM | Login");
    model.addAttribute("content", "login :: content");

    return "index";
  }
}
