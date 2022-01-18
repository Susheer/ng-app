import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RegionService } from '../app/region.service';
import { loadCountry, loadCountrySuccess } from '../store/actions';
@Injectable()
export class RegionEffects {
  constructor(
    private actions$: Actions,
    private regionService: RegionService
  ) {}
  loadCoutries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCountry),
      mergeMap((action) => {
        const { regionName } = action;
        return this.regionService.loadCountry(regionName).pipe(
          map((data) => {
            return loadCountrySuccess({ countries: data });
          })
        );
      })
    );
  });
}
