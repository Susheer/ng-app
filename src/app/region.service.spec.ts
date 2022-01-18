import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from '../store/reducer';
import { RegionEffects } from '../store/region.effect';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { RegionService } from './region.service';

describe('Region Service', () => {
  let service: RegionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CountrydetailsComponent, ControlComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ state: regionReducer }),
        EffectsModule.forRoot([RegionEffects]),
      ],
      providers: [RegionService],
    });
    service = TestBed.inject(RegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
