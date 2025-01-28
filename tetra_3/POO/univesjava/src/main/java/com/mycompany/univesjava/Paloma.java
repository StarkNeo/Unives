/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public class Paloma extends Ave {
    public Paloma(String nombre){
        super(nombre);
    }
    
    @Override
    public void hacerSonido(){
        System.out.println("La paloma hace cucurrucucu paloma!");
    }
    @Override
    public void comer(){
        System.out.println("La paloma come insectos");
    }
}
