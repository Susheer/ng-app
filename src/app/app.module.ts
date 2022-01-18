import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionService } from './region.service';
import { regionReducer } from '../store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from 'src/store/region.effect';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [AppComponent, CountrydetailsComponent, ControlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ state: regionReducer }),
    EffectsModule.forRoot([RegionEffects]),
  ],
  providers: [RegionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
