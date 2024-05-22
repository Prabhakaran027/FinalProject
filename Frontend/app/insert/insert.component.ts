import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {
updatedata: any;
  constructor(private h1: DemoService) { }
  ngOnInit(): void {
  }
  insertdata(insertform:any)
  {
      return this.h1.insertdata1(insertform.value).subscribe();
  }
}