package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping("/home")
  public String home(Model model) {
    String charData = """
            {
              "earningPerMonth": {
                "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                "earnings": [12100, 9850, 10570, 13560, 12610, 10580, 11630, 9600, 11660]
              },
              "membershipPie": {
                "memberships": ["Básica", "Premium", "Estudiantil", "Corporativa", "Familiar", "VIP Anual"],
                "members": [44, 55, 13, 43, 22, 12]
              }
            }
        """;

    model.addAttribute("title", "Animal GYM | Home");
    model.addAttribute("content", "home :: content");
    model.addAttribute("modal", "home :: modal");
    model.addAttribute("activePage", "home");
    model.addAttribute("charData", charData);

    return "layout";
  }
}
