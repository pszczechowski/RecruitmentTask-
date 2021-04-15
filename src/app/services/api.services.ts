import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
 private apiUrl = 'https://restcountries.eu/rest/v2';
 id: string;

  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get(`${this.apiUrl}/all`);
  }

  getCountry(id: string) {
    return this.httpClient.get(`${this.apiUrl}/alpha?codes=${id}`);
  }

  getRegionCountries(region) {
    return this.httpClient.get(`${this.apiUrl}/region/${region}`);
  }

  getCountryByName(name){
    return this.httpClient.get(`${this.apiUrl}/name/${name}`);
  }
}
