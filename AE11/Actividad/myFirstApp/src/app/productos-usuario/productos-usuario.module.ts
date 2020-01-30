import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosUsuarioPageRoutingModule } from './productos-usuario-routing.module';

import { ProductosUsuarioPage } from './productos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosUsuarioPageRoutingModule
  ],
  declarations: [ProductosUsuarioPage]
})
export class ProductosUsuarioPageModule {}
