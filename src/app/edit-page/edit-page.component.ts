import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private _formBilder: FormBuilder, 
    private http:HttpClient,
    private datePipe: DatePipe) { }
  userForm!: FormGroup;
  currentProductId : any  ;
  ngOnInit(): void {
    

    this.currentProductId = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get('http://testapi.techriff.in/api/open/products/'+this.currentProductId)
    .subscribe((data:any)=>{
      console.log("Successfully fetched product",data);
      
      //Make an HTTP Call to the server api/products/{{id}}
      //Bind the value in the form.

      this.userForm = this._formBilder.group({
        productName:[data.productName,[Validators.required]],
        description:[data.description,[Validators.required]],
        releaseDate:[this.datePipe.transform(data.releaseDate, 'YYYY-MM-dd') ,[Validators.required]],
        price:[data.price,[Validators.required]],
        rating:[data.rating,[Validators.required]],
        imageUrl:[data.imageUrl,[Validators.required]]
        })
  })
}
update(){
  console.log(this.userForm.value);
  // this.http.put('http://testapi.techriff.in/api/open/products/').subscribe(data=>{
  //   console.log(data)
  // })
}

}
