import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-dalete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {
  constructor(private h1:DemoService) { }
  ngOnInit(): void {
  }
  deletedata(deleteform:any)
     {
       return this.h1.deletedata1(deleteform.value).subscribe();
     }
}
