import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  country: any;

  component: any;

  constructor(
    private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const region = this.route.snapshot.paramMap.get('region');
    this.apiService.getRegionCountries(region).subscribe((res) => {
      this.country = res;
      console.log(res);
    });
  }
  
  getRegion(): string{
    return this.route.snapshot.paramMap.get('region');
  }

 getRegionCountries(region): void {
    if (region.target.value === '') {
      this.getCountries();
      console.log(region);
      }
    }

  getCountries(): void {
    this.apiService.getCountries().subscribe((res) => {
      this.country = res;
      console.log(res);
    });
  }

  getValidPath(name): string {
    // Include your Fail Url Matches Character 
    const matchFailsUrl = ['(', ')'];
    for (let i = 0; i < matchFailsUrl.length; i++) {
      name = name.replace(matchFailsUrl[i], '');
    }
    return name;
  }
}
