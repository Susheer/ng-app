import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import * as Reducer from 'src/store/reducer';

describe('Region Reducer', () => {
  it('should return the default state', () => {
    const { initialState } = Reducer;
    const action = {
      type: 'unknown',
    };
    const state = Reducer.regionReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
