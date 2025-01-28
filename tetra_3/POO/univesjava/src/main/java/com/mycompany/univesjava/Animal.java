/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.univesjava;

/**
 *
 * @author Jesus Hernandez
 */
public abstract class Animal implements MyInterfaz {
    protected String nombre;
    public Animal(String nombre){
        this.nombre=nombre;
    }
   
    public abstract void obtenerClase();
    //METODO HEREDADO QUE SERA INVOCADO POR TODAS LAS CLASES
    public void mostrarNombre(){
        System.out.println("Nombre: "+nombre);        
    }
    
}
