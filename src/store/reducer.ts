import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';

export const initialState: { regions: [string]; countries: [string] } | {} = {
  regions: ['Europe', 'Asia'],
};

export const regionReducer = createReducer(
  initialState,
  on(Actions.loadRegions, (state, payload) => {
    return { ...state, regions: payload.regions };
  }),
  on(Actions.loadCountrySuccess, (state, payload) => {
    return { ...state, countries: payload.countries };
  }),
  on(Actions.putSelectedCountry, (state, payload) => {
    return { ...state, selectedCountry: payload.country };
  })
);
