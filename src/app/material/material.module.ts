import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialPageRoutingModule } from './material-routing.module';

import { MaterialPage } from './material.page';

import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    IonicModule,
    MaterialPageRoutingModule
  ],
  declarations: [MaterialPage]
})
export class MaterialPageModule {}
