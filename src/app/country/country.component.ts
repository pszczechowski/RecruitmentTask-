import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/services/api.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() country: any;

  constructor() {}

  ngOnInit(): void {}
}
