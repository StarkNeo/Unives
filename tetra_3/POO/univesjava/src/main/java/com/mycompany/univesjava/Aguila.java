/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public class Aguila extends Ave {
    public Aguila(String nombre){
        super(nombre);
    }
    
    @Override
    public void hacerSonido(){
        System.out.println("El aguila hace un sonido de aguila");
    }
    @Override
    public void comer(){
        System.out.println("El aguila come un raton");
    }
}
