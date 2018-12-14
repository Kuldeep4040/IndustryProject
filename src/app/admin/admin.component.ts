import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  

import {MatDialog, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
animal: string;
name: string;

adminForm: FormGroup;  
foundryName:string='';
example = { first: 'kd', last: '' };

constructor(public dialog: MatDialog, private fb: FormBuilder) {
  this.adminForm = fb.group({  
    'foundryName' : [null, Validators.required] 
    
    
  });  

}  


openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}
@Component({
  selector: 'inward-modal',
  templateUrl: './inward-modal.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}