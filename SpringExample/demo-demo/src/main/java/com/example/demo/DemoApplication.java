package com.example.demo;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class DemoApplication {

    // @Bean(name ="human")
    // Human human (){
    //     return new Human();
    // }


    public static void main(String[] args) {

       ApplicationContext context =   SpringApplication.run(DemoApplication.class, args);
       
       ClassPathXmlApplicationContext context2 = new ClassPathXmlApplicationContext("beans.xml");
    //    Human human =   context.getBean("human",Human.class);
    //    Car car = context.getBean("car",Car.class);
    //     car.startEngine();
        // System.out.println(human.name);
    }   




}
