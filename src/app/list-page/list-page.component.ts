import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private http: HttpClient,
    private act:ActivatedRoute,
    private router:Router) { }
  products:any  = [];
  ngOnInit(): void {
    this.http.get('http://testapi.techriff.in/api/open/products').subscribe(data=>{
    console.log(data)
    this.products = data;
   })

  }
  delete(productId:any){
    this.http.delete('http://testapi.techriff.in/api/open/products/'+productId)
    .subscribe(data=>{
      console.log("Deleted",data);  
      //remove from table row
      this.products = this.products.filter((x:any)=>x.productId!=productId)
    })
  }

  edit(productId:any): void{
    this.router.navigate(['/Edit',productId]);
  }

}
