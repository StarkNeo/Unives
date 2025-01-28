/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jesus Hernandez
 */
public class Principal {
    public static void main(String[] args){
        List<Animal> animales = new ArrayList<>();
        animales.add(new Perro("Firulais"));
        animales.add(new Lobo("Colmillo blanco"));
        animales.add(new Gato("Michi"));
        animales.add(new Tigre("Tono"));
        animales.add(new Aguila("Pico dorado"));
        animales.add(new Paloma("Mary"));
        animales.add(new Trucha("Troncha"));
        animales.add(new Salmon("Sam"));
        for (Animal animal : animales) { 
            animal.mostrarNombre();
            animal.hacerSonido();
            animal.obtenerClase();
            animal.comer();
            System.out.println();
         } 
              
    }
}
