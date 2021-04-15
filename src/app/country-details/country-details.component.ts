import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.services';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  private country: Array<object> = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.apiService.getCountryByName(name).subscribe((res: Array<object>) => {
      this.country = res;
    });
  }

  onBack(): void {
    history.back();
  }

  getSingleValue(value): string {
    return this.country[0][value];
  }
  getSingleStringValue(value): string {
    return this.country[0][value];
  }

  getArrayObjectValue(value): Array<string> {
    const arrayObject = [];
    for (let i = 0; i < this.country[0][value].length; i++) {
      arrayObject.push(this.country[0][value][i]);
    }
    return arrayObject;
  }

  getStringifyArrayObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value])
      .replace('[{', '')
      .replace('}]', '')
      .split(',');
  }

  getStringifyObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value])
      .replace('{', '')
      .replace('}', '')
      .split(',');
  }
}
