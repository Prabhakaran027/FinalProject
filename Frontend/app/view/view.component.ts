import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  data: any;
  constructor(private h1: DemoService) { }
  ngOnInit(): void {
    let res = this.h1.viewdata1();
    res.subscribe((data1) => this.data = data1);
  }
}

