package com.anisekai.aoo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {

    @GetMapping("/home")
    public String home() {
        return "home.html";
    }

    @GetMapping("/anisekai")
    public String anisekai() {
        return "anisekai.html";
    }

}
