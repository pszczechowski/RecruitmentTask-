import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries;
  image: {} = [];
  regions: {} = [
    { name: 'Africa', value: 'africa', image: '../../assets/africa.jpg' },
    { name: 'Americas', value: 'americas', image: '../../assets/america.jpg' },
    { name: 'Asia', value: 'asia', image: '../../assets/asia.jpg' },
    { name: 'Europe', value: 'europe', image: '../../assets/europe.jpg' },
    { name: 'Oceania', value: 'oceania', image: '../../assets/oceania.jpg' },
  ];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries(): void {
    this.apiService.getCountries().subscribe((res) => {
      this.countries = res;
    });
  }
  getRegionCountries(region): void {
    if (region.target.value === '') {
      this.getCountries();
    } else {
      this.router.navigateByUrl(region.target.value + '/countries');
    }
    }
  }
