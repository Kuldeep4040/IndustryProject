import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  


@Component({
  selector: 'app-inward',
  templateUrl: './inward.component.html',
  styleUrls: ['./inward.component.css']
})
export class InwardComponent  {

  inwardForm: FormGroup;  
  chalan_number:string='';
  FoundryName:string='';
  jobName:string='';  
  inwardDate:Date=null;  
  inwardQuantity:string=''; 
  inwardProcess:string='';
  inwardAddedBy:string=''
  
   
  constructor(private router: Router,private fb: FormBuilder) {

   // To initialize FormGroup  
   this.inwardForm = fb.group({  
    'chalan_number' : [null, Validators.required],  
    'FoundryName':[null, Validators.required], 
    'jobName' : [null, Validators.required],  
    'inwardDate' : [null, Validators.required],  
    'inwardQuantity' : [null, Validators.required],
    'inwardProcess':[null, Validators.required], 
    'inwardAddedBy' : [null, Validators.required] 
    
  });  

}  



// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  
}  
  

 
}
