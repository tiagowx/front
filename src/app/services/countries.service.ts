import { Injectable } from '@angular/core';
import { ICountry } from '../interfaces/icountry';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  createCountry = async (country: ICountry) => {

  }

  getCountryById = async (id: number) => {

  }

  getCountriesAll = async () => {

  }

  getCountriesByName = async (name: string) => {

  }

  updateCountryById = async (id: number) => {
    
  }

  deleteCountryById = async (id: number) => {

  }

  constructor() { }
}
