import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get(`${this.apiUrl}/all`);
  }

  getCountry(id) {
    return this.httpClient.get(`${this.apiUrl}/alpha?codes=${id}`);
  }

  getRegionCountries(region) {
    return this.httpClient.get(`${this.apiUrl}/region/${region}`);
  }
}
