/* eslint-disable sort-imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamingChartComponent } from './gaming-chart/gaming-chart.component';

@NgModule({
  declarations: [AppComponent, GamingChartComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
