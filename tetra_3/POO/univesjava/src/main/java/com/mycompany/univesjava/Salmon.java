/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public class Salmon extends Pez {
    public Salmon(String nombre){
        super(nombre);
    }
    
    @Override
    public void hacerSonido(){
        System.out.println("El salmon hace aguadito");
    }
    @Override
    public void comer(){
        System.out.println("El salmon come gusanos");
    }
}
