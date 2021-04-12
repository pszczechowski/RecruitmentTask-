import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
 private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) {}

  getCountries(): any {
    return this.httpClient.get(`${this.apiUrl}/all`);
  }

  getCountry(id): any {
    return this.httpClient.get(`${this.apiUrl}/alpha?codes=${id}`);
  }

  getRegionCountries(region): any {
    return this.httpClient.get(`${this.apiUrl}/region/${region}`);
  }
}
