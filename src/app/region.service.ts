import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private http: HttpClient) {}
  loadCountry(region: string | null | undefined): Observable<any> {
    return this.http.get(`https://restcountries.com/v3/region/${region}`).pipe(
      map((response: any) => {
        return response.map(this.transformedData);
      })
    );
  }
  transformedData(data: Country) {
    const { name, population, capital, currencies, flags } = data;
    return { name: name, population, capital, currencies, flags };
  }
}
