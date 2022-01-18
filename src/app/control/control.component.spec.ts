import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from 'src/store/reducer';
import { AppComponent } from '../app.component';
import { CountrydetailsComponent } from '../countrydetails/countrydetails.component';
import { RegionService } from '../region.service';

import { ControlComponent } from './control.component';

describe('ControlComponent', () => {
  let component: ControlComponent;
  let fixture: ComponentFixture<ControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CountrydetailsComponent, ControlComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ state: regionReducer }),
      ],
      providers: [RegionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain default value for dropdown lists', () => {
    expect(component.reactiveForm.value).toEqual({ region: '', country: '' });
  });
  it('should contain null for selected region by default', () => {
    expect(component.selectedRegion).toBe(null);
  });
  it('should contain zero item for countries by default', () => {
    expect(component.countries.length).toBe(0);
  });
  it('should contain only tow values for regions', () => {
    component.reactiveForm.setValue({ region: 'eurpe', country: 'eurpe' });
    fixture.detectChanges();
    expect(component.regions.length).toBe(2);
  });
});
