import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemoService {
  link1 = "http://localhost:9001/insert";
  link2 = "http://localhost:9001/update";
  link3 = "http://localhost:9001/delete";
  link4 = "http://localhost:9001/view";

  constructor(private s1: HttpClient) {

  }
  insertdata1(data: any) {
    return this.s1.post(this.link1, data);
  }

  updatedata1(data: any) {
    return this.s1.post(this.link2, data)
  }

  deletedata1(data: any) {
    return this.s1.post(this.link3, data)
  }
  viewdata1() {
    return this.s1.get(this.link4);
  }

}

