package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * Human
 */


@Component
public class Human {
    int age = 5;
    String name = "menghok";    
    Car car; 


    @Autowired
    Human (  @Qualifier("hehehe") Car car) {
        this.car = car;
    }

    @Override
    public String toString() {
        return "Human{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}