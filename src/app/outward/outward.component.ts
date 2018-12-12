import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  


@Component({
  selector: 'app-outward',
  templateUrl: './outward.component.html',
  styleUrls: ['./outward.component.css']
})
export class OutwardComponent {

  outwardForm: FormGroup;  
  chalan_number:string='';
  jobName:string='';  
  inwardQuantity:string=''; 
  inwardBalance:string='';
  outwardQuantity:string=''
  outwardAddedBy:string=''

  



   
  constructor(private router: Router,private fb: FormBuilder) {

   // To initialize FormGroup  
   this.outwardForm = fb.group({  
    'chalan_number' : [null, Validators.required],  
    'jobName' : [null, Validators.required],  
    'inwardQuantity' : [null, Validators.required],  
    'inwardBalance' : [null, Validators.required],
    'outwardQuantity':[null, Validators.required], 
    'outwardAddedBy' : [null, Validators.required] 
    
  });  

}  



// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  
}  
  
}
