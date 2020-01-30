import { Injectable } from '@angular/core';
import { IArticulo,IMotor, IInmobiliaria,ITecnologia } from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';




@Injectable()

export class ArticuloServicio{


    /*
    articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[]=[
        {
            "Id":0,
            "Nombre":"Iphone",
            "Precio":200,
            "Descripcion": "Usado",
            "Tipo": "Tecnologia"
         },

        {
            "Id": 1,
            "Nombre": "Yamaha YZF",
            "Precio": 400, 
            "Descripcion": "Escape Completo mivv Terminal GP Carbono Yamaha yzf r125 2008/2013 Sistema Completo"
        },
    
        {
            "Id": 2,
            "Nombre": "Portátil MSI Prestige 15 A10SC-060XES",
            "Precio": 1300, 
            "Descripcion": "Ordenador portátil 15.6 FULL HDI Intel Core I7-10710U, 16GB RAM, 1TB SSD, Nvidia GTX 1650 4GB MAX-Q, sin Sistema operativo) Teclado QWERTY Español"
        },
    
        {
            "Id": 3,
            "Nombre": "Dreams Unreal: The Genesis of the Psychedelic Rock Poster",
            "Precio": 37.91, 
            "Descripcion": "Póster de tapa dura de la mítica banda Genesis, un gran toque especial para tu hogar"
        }
    ]
    getArticulos(): IArticulo[]{
        return this.articulos;
    }

    getArticulo(id: number) : IArticulo{
        return this.articulos.find(x => x.Id == id);
     }*/



     //vamos a hacer el contructor con referencia a la base de datos

     constructor(private _db: AngularFireDatabase){
        
     }

     getArticulos() : firebase.database.Reference{
        let ref = this._db.database.ref("Articulos");
        return ref;
        
     }

     getArticulosUsuario(id: string): IArticulo[]{
        let ref = this._db.database.ref("Articulos");
        let result: IArticulo[] =[];
        ref.orderByChild('Usuario').equalTo(id).once("value", snapshot =>{
            
            snapshot.forEach(child =>{
                console.log("He encontrado"+child.val().Usuario);
                const value = child.val();
                value.key = child.key;
                result.push(value);

            })
        
        });
        return result;
     }


     //con esta función recorremos el nodo Articulos, lo ordenamos por la key y eliminamos el key que hemos pasado 
     eliminarArticulo(valor: string){

        let ref = this._db.database.ref("Articulos");
        ref.orderByKey().equalTo(valor).once("value", snapshot => {
                snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            })
        });
     }



     getArticulo(key : string): firebase.database.Reference{
        let ref = this._db.database.ref('/articulos/' + key);
        return ref;
     }

     setArticulo(articulo : IArticulo){
       let ref = this._db.database.ref("Articulos");
        ref.push(articulo);
     }
     
}