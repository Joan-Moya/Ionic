import { Component, OnInit } from '@angular/core';
  import {IArticulo, IMotor, IInmobiliaria, ITecnologia} from '../interfaces';
  import { ToastController } from '@ionic/angular';
  import {ArticuloServicio} from '../services/articulo.servicio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})


 
  export class ListarPage {
  
  
    //VAMOS A PONER LA PROGRAMACION DE LOS DIFERENTES DIVS
    oculto : boolean = true;
    ocultoInmobiliaria : boolean = true;
    ocultoTecnologia : boolean = true;
    ocultoHogar : boolean = true;
  
    //ponemos los datos que vamos a recibir de el articulo que vamos a poner
    nombre : string;
    descripcion: string;
    precio: number;
    tipo: string;
    kilometros: number;
    año: number;
    metros: number;
    numeroBaños : number;
    numeroHabitaciones: number;
    localidad: string;
    perfecto: boolean;
    usado:boolean;
    
    articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];
    private _ArticulosServicio;
  
  
    constructor(private _toastCtrl : ToastController, cs : ArticuloServicio) {
      this._ArticulosServicio = cs;
    }
  
    ngOnInit(){
      /*this.articulos = this._ArticulosServicio.getArticulos();*/
    }
  
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
      this.ocultoHogar = !this.ocultoHogar;
      
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
  
      let articulo: (IArticulo | IMotor | IInmobiliaria | ITecnologia);

      if(this.ocultoInmobiliaria == true){//si es de tipo inmobiliaria...
  
      articulo={"Key":"",
                          "Nombre":this.nombre,
                          "Precio": this.precio,
                          "Descripcion":this.descripcion,
                          }
    
        //this._ArticulosServicio.setArticulo(this.articulos); //insertamos los datos introducidos a la base de datos

      }else if(this.oculto == true){//si es de tipo motor...
  
        articulo={"Key":"",
        "Nombre":this.nombre,
        "Precio": this.precio,
        "Descripcion":this.descripcion,
        }
    
        //this._ArticulosServicio.setArticulo(this.articulos); //insertamos los datos introducidos a la base de datos
  
      }else if(this.ocultoHogar == true){//si es de tipo hogar...
  
        articulo={"Key":"",
        "Nombre":this.nombre,
        "Precio": this.precio,
        "Descripcion":this.descripcion,
        }
  
       // this._ArticulosServicio.setArticulo(this.articulos); //insertamos los datos introducidos a la base de datos

      }else if(this.ocultoTecnologia == true){//si es de tipo tecnologia...
  
        articulo={"Key":"",
        "Nombre":this.nombre,
        "Precio": this.precio,
        "Descripcion":this.descripcion,
        }
                             
       // this._ArticulosServicio.setArticulo(this.articulos); //insertamos los datos introducidos a la base de datos
      }

      delete articulo.Key;
      this._ArticulosServicio.setArticulo(articulo);
    }
  
    /*
    eliminar(id){
      for(var i=0; i<this.articulos.length; i++){
        if(this.articulos[i].Id === id){
          this.articulos.splice(i,1);
        }
      }
    }*/

  }
