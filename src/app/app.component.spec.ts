import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from 'src/store/reducer';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { RegionService } from './region.service';

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'myapp'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('myapp');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Reactive form with, ngrx/store (redux)'
    );
  });
  // it('should get app title from user service', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.componentInstance;
  //   let userService = fixture.debugElement.injector.get(UserService);
  //   fixture.detectChanges();
  //   expect(app.title).toEqual(userService.user.name);
  // });
});
