import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products:any  = [];
  ngOnInit(): void {
    this.http.get('http://testapi.techriff.in/api/open/products').subscribe(data=>{
    console.log(data)
    this.products = data;
   })

  }

}
