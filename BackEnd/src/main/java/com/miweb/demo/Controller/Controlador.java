
package com.miweb.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controlador {
    
    @GetMapping 
    public String decirHola() { 
        return "Hola holitas";
    } 
}


