import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private layoutState = 'side';
  get topLayout() {
    return this.layoutState === 'top';
  }
  get sideLayout() {
    return this.layoutState === 'side';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
