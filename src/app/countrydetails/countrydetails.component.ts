import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Country } from '../../model/country.model';
import { countriesSelector } from '../../store/region.selector';
@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css'],
})
export class CountrydetailsComponent implements OnInit {
  selectedCountry: Country | undefined = undefined;
  constructor(public store: Store) {}
  loadCountry() {
    let localStore: any = {};
    this.selectedCountry?.currencies;
    this.store.pipe(take(1)).subscribe((s) => (localStore = s));
    if (localStore.state?.selectedCountry) {
      this.selectedCountry = localStore.state?.selectedCountry;
    }
  }
  getValue(object: any): { name: string; symbol: string }[] {
    return Object.values(object);
  }
  ngOnInit(): void {}
}
// let curr = {
//   gpk: { name: 'he', symbol: 's1' },
//   gpk2: { name: 'he2', symbol: 's2' },
// };
