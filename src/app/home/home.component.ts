import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = false;
  countries: any;
  reg = '';
  image: {} = [];
  regions: {} = [
    { name: 'Africa', value: 'africa', image: '../../assets/africa.jpg' },
    { name: 'Americas', value: 'americas', image: '../../assets/america.jpg' },
    { name: 'Asia', value: 'asia', image: '../../assets/asia.jpg' },
    { name: 'Europe', value: 'europe', image: '../../assets/europe.jpg' },
    { name: 'Oceania', value: 'oceania', image: '../../assets/oceania.jpg' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getCountries();
  }
  getCountries(): void {
    this.api.getCountries().subscribe((res) => {
      this.countries = res;
      this.loading = false;
    });
  }
  getRegionCountries(region): void {
    if (region.target.value === '') {
      this.getCountries();
    } else {
      this.loading = true;
      this.api.getRegionCountries(region.target.value).subscribe((res) => {
        this.countries = res;
        this.loading = false;
      });
    }
  }
}
