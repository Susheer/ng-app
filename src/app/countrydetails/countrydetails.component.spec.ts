import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from 'src/store/reducer';
import { AppComponent } from '../app.component';
import { ControlComponent } from '../control/control.component';
import { RegionService } from '../region.service';
import { CountrydetailsComponent } from './countrydetails.component';

describe('Country details Component', () => {
  let component: CountrydetailsComponent;
  let fixture: ComponentFixture<CountrydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CountrydetailsComponent, ControlComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ state: regionReducer }),
      ],
      providers: [RegionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
