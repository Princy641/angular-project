import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private _formBilder: FormBuilder){}
  ngOnInit(){
    this.userForm = this._formBilder.group({
      productName:[' ',[Validators.required]],
      description:[' ',[Validators.required]],
      releaseDate:[' ',[Validators.required]],
      price:[' ',[Validators.required]],
      rating:[' ',[Validators.required]],
      imageUrl:[' ',[Validators.required]]
        
      })
      
    }
    
onSubmit(){
  console.log(this.userForm.value);

}


}
