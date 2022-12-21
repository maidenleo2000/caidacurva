import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoComponent } from './calculo.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [
    CalculoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    InputTextModule,
    FormsModule,
    CardModule
  ],
  exports: [
    CalculoComponent
  ]
})
export class CalculoModule { }
