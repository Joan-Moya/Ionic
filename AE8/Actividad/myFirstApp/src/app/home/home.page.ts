import { Component } from '@angular/core';
import {IArticulo} from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {


  //VAMOS A PONER LA PROGRAMACION DE LOS DIFERENTES DIVS
  oculto : boolean = true;
  ocultoInmobiliaria : boolean = true;
  ocultoTecnologia : boolean = true;

  //ponemos los datos que vamos a recibir de el articulo que vamos a poner
  nombre : string;
  descripcion: string;
  precio: number;
  articulos: IArticulo[] = [
    {
      "Id":1,
      "Nombre":"Iphone",
      "Precio":200,
      "Descripcion": "Usado"
    }

  ];



  constructor() {}

  Cambiar_OcultoMotor() : void{
    this.oculto = !this.oculto;
    
    //ocultamos los otros formularios que puedan estar mostrandose
    if(this.ocultoInmobiliaria=true){
      

    }else{
      this.ocultoInmobiliaria=false;//ocultamos inmobiliaria
    }

    if(this.ocultoTecnologia=true){

    }else{
      this.ocultoTecnologia=false;//ocultamos tecnologia
    }

  }

  Cambiar_OcultoHogar() : void{
    
    //ocultamos los otros formularios que puedan estar mostrandose
    if(this.ocultoInmobiliaria=true){
      

    }else{
      this.ocultoInmobiliaria=false;//ocultamos inmobiliaria
    }

    if(this.ocultoTecnologia=true){

    }else{
      this.ocultoTecnologia=false;//ocultamos tecnologia
    }

    if(this.oculto=true){

    }else{
      this.oculto=false;//oculto motor
    }

  }



  Cambiar_OcultoInmobiliaria() : void{
    this.ocultoInmobiliaria = !this.ocultoInmobiliaria;

    //ocultamos los otros formularios que puedan estar mostrandose
    if(this.oculto=true){
      

    }else{
      this.oculto=false;//ocultamos motor
    }

    if(this.ocultoTecnologia=true){

    }else{
      this.ocultoTecnologia=false;//ocultamos tecnologia
    }

  }

  Cambiar_OcultoTecnologia() : void{
    this.ocultoTecnologia = !this.ocultoTecnologia;

    //ocultamos los otros formularios que puedan estar mostrandose
    if(this.ocultoInmobiliaria=true){
     
      
    }else{
      this.ocultoInmobiliaria=false;//ocultamos inmobiliaria
    }

    if(this.oculto=true){

    }else{
      this.oculto=false;//ocultamos motor
    }
  }

  insertar(){
    this.articulos.push({"Id":this.articulos.length+1,
                        "Nombre":this.nombre,
                        "Precio": this.precio,
                        "Descripcion":this.descripcion})

        console.log("Se ha insertado un nuevo elemento")
  }
  
}
