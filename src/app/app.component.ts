import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadCountry } from 'src/store/actions';
import { regionSelector, countriesSelector } from '../store/region.selector';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  regions: any = [];
  countries: Country[] = [];
  selectedRegion: string | null = null;

  constructor(public store: Store, public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.store.select(countriesSelector).subscribe((data) => {
      this.countries = data;
    });
  }
}
