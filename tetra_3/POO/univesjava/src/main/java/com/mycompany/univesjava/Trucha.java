/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public class Trucha extends Pez {
    public Trucha(String nombre){
        super(nombre);
    }
    
    @Override
    public void hacerSonido(){
        System.out.println("La trucha hace ponte trucha!");
    }
    @Override
    public void comer(){
        System.out.println("La trucha come gusanos");
    }
}
