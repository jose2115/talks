import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HomeModule,
  ],
  declarations: [
    ModulosComponent,
  ],
  exports: []
})
export class ModulosModule { }
