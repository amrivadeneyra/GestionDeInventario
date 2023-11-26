import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showOptions = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.changeDetector.detectChanges();
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;

  }

}
