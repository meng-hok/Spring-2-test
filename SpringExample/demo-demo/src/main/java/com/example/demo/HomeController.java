package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

  
    @Autowired
    Human human ;

    @RequestMapping("/home")
    @ResponseBody
    String home() {
        return  human.car.startEngine();
    }
}
