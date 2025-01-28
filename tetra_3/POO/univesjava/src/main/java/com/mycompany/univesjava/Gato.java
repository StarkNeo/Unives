/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public class Gato extends Felino {
    public Gato(String nombre){
        super(nombre);
    }
    @Override
    public void hacerSonido(){
        System.out.println("El gato hace miau");
    }
    @Override
    public void comer(){
        System.out.println("El gato esta comiendo pizza");
    }
    
}
