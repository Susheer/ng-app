import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from '../../model/country.model';
import { loadCountry, putSelectedCountry } from 'src/store/actions';
import { regionSelector, countriesSelector } from '../../store/region.selector';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {
  reactiveForm = this.formBuilder.group({
    region: [''],
    country: [''],
  });
  regions: any = [];
  countries: Country[] = [];
  selectedRegion: string | null = null;

  constructor(public store: Store, public formBuilder: FormBuilder) {}
  // Getter method to access formcontrols
  get regionName() {
    return this.reactiveForm.get('region');
  }
  // Getter method to access formcontrols
  get countryName() {
    return this.reactiveForm.get('country');
  }
  changeCountry(event: any) {
    this.countryName?.setValue(event.target.value);
    this.store.dispatch(
      putSelectedCountry({
        country: this.countries[parseInt(this.countryName?.value)],
      })
    );
    // this.selectedCountry = this.countries[parseInt(this.countryName?.value)];
  }

  changeRegion(event: any) {
    this.regionName?.setValue(event.target.value);
    this.selectedRegion = this.regionName?.value || null;
    this.store.dispatch(loadCountry({ regionName: this.selectedRegion }));
  }
  ngOnInit(): void {
    this.store.select(regionSelector).subscribe((data) => {
      this.regions = data;
    });
    this.store.select(countriesSelector).subscribe((data) => {
      if (data) {
        this.countries = data;
      }
    });
  }
}
