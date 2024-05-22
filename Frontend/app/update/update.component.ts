import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private h1: DemoService) { }

  ngOnInit(): void {
  }

  updatedata(updateform: any) {
    this.h1.updatedata1(updateform.value).subscribe(
      response => {
        console.log('Data updated successfully', response);
        // Add any additional logic for successful update
      }
    );
  }
}
