import { createAction, props } from '@ngrx/store';
import { Country } from '../model/country.model';

export const loadRegions = createAction(
  'load regions',
  props<{ regions: [string] }>()
);

export const loadCountry = createAction(
  'load country',
  props<{ regionName: string | null | undefined }>()
);
export const loadCountrySuccess = createAction(
  'load country success',
  props<{ countries: Country[] }>()
);
export const putSelectedCountry = createAction(
  'selected country',
  props<{ country: Country }>()
);
