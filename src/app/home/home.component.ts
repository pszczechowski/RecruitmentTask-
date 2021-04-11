import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/services/api.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  countries: any;
  regions: {} = [
    {name: 'All', value: ''},
    { name: 'Africa', value: 'africa' },
    { name: 'Americas', value: 'americas' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' }
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCountries();
  }
  getCountries(): void {
    this.api.getCountries().subscribe(res => {
    this.countries = res;
    this.loading = false;
    });
  }
  getRegionCountries(region): void {
    if (region.target.value === '') {
      this.getCountries();
    } else {
      this.loading = true;
      this.api.getRegionCountries(region.target.value).subscribe(res => {
        this.countries = res;
        this.loading = false;
      });
    }
  }

}
