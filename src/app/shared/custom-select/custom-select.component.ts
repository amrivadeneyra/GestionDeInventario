import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from 'src/app/navigation/sidenavNavigation';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  navigation: any[] = []

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.navigation = navigation;
  }

  goRouteLink(route: string): void {
    this.router.navigate([route]);
  }

}
