import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Country } from '../model/country.model';
export const regionSelector = createSelector(
  createFeatureSelector('state'),
  (state: { regions: [string] }) => {
    return state.regions;
  }
);
export const countriesSelector = createSelector(
  createFeatureSelector('state'),
  (state: { countries: Country[] }) => {
    return state.countries;
  }
);

export const loadSelectedCountrySelecter = createSelector(
  createFeatureSelector('state'),
  (state: { country: Country }) => {
    return state.country;
  }
);
