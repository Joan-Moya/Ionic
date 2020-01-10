import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ArticuloServicio } from '../services/articulo.servicio';
import { IArticulo } from '../interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: number;
  res: IArticulo;
  

  constructor(private _activatedRoute: ActivatedRoute, private _ArticuloServicio : ArticuloServicio) {

    
   }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log("he recibido un "+this.id);
    this.res=  this._ArticuloServicio.getArticulo(this.id);
    console.log("El nombre es "+this.res.Nombre);
    console.log("El Precio es es "+this.res.Precio);
    
  }


}
