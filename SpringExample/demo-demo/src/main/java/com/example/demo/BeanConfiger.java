package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * BeanConfiger
 */
@Configuration
public class BeanConfiger {

    @Bean("hehehe")
    Car car (){
        return new Car();
    }

    
    
}