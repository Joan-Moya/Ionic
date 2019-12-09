import { Component } from '@angular/core';

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


  
}
