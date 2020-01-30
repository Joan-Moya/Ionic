import { Component, OnInit } from '@angular/core';
import {IArticulo, IMotor, IInmobiliaria, ITecnologia} from '../interfaces';
import { ToastController } from '@ionic/angular';
import {ArticuloServicio} from '../services/articulo.servicio';

@Component({
  selector: 'app-productos-usuario',
  templateUrl: './productos-usuario.page.html',
  styleUrls: ['./productos-usuario.page.scss'],
})
export class ProductosUsuarioPage implements OnInit {


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
    this.articulos = this._ArticulosServicio.getArticulosUsuario("e7sWwhTt0FXvGerUku7j43U90ik1");
  }

  mostrar(){
    console.log("Elementos de " +this.articulos.length)
  }

  
eliminar(valor: string){
  this._ArticulosServicio.eliminarArticulo(valor);
  
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

  /*
  insertar(){

    if(this.ocultoInmobiliaria == true){//si es de tipo inmobiliaria...

    this.articulos.push({"Id":this.articulos.length+1,
                        "Nombre":this.nombre,
                        "Precio": this.precio,
                        "Descripcion":this.descripcion,
                        "Metros":this.metros,
                        "NumeroBaños" : this.numeroBaños,
                        "NumeroHabitaciones": this.numeroHabitaciones,
                        "Localidad": this.localidad})

        console.log("Se ha insertado un nuevo elemento de tipo inmobiliaria");


    }else if(this.oculto == true){//si es de tipo motor...

      this.articulos.push({"Id":this.articulos.length+1,
                        "Nombre":this.nombre,
                        "Precio": this.precio,
                        "Descripcion":this.descripcion,
                        "Tipo": this.tipo,
                        "Kilometros":this.kilometros,
                        "Año": this.año })

        console.log("Se ha insertado un nuevo elemento de tipo motor");


    }else if(this.ocultoHogar == true){//si es de tipo hogar...

      this.articulos.push({"Id":this.articulos.length+1,
                        "Nombre":this.nombre,
                        "Precio": this.precio,
                        "Descripcion":this.descripcion})

        console.log("Se ha insertado un nuevo elemento de tipo hogar");

    }else if(this.ocultoTecnologia == true){//si es de tipo tecnologia...

      this.articulos.push({"Id":this.articulos.length+1,
                           "Nombre":this.nombre,
                           "Precio": this.precio,
                           "Descripcion":this.descripcion,
                           "Perfecto":this.perfecto,
                           "Usado":this.usado})

      console.log("Se ha insertado un nuevo elemento de tipo tecnologia");

    }
  }

  eliminar(id){
    for(var i=0; i<this.articulos.length; i++){
      if(this.articulos[i].Id === id){
        this.articulos.splice(i,1);
      }
    }
  }*/
  
}

