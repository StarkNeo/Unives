/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public abstract class Canino extends Mamifero {
    public Canino(String nombre){
        super(nombre);
    }
    
    @Override
    public void obtenerClase(){
        System.out.println("Mamifero Canino");
    }
    
    
}
