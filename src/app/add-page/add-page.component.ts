import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private _formBilder: FormBuilder, 
    private http:HttpClient,
    private router: Router){}
  ngOnInit(){
    this.userForm = this._formBilder.group({
      productName:['',[Validators.required]],
      description:['',[Validators.required]],
      releaseDate:['',[Validators.required]],
      price:['',[Validators.required]],
      rating:['',[Validators.required]],
      imageUrl:['',[Validators.required]]
      })
      
    }
    
onSubmit(){
  console.log(this.userForm.value);
  this.http.post('http://testapi.techriff.in/api/open/products', this.userForm.value)
    .subscribe(data=>{
      console.log("Successfully added product",data);
      this.router.navigate(['/List']);
    });
}


}
