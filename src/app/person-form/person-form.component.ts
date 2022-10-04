import { Component, Inject } from '@angular/core';  
  
import { FormBuilder, FormGroup, Validators ,NgForm, FormControl } from '@angular/forms';  
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _moment from 'moment';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent{  
  regiForm: FormGroup;  
  uploadedImage: any; 
  
  constructor(
    private dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public suppDocument:any,
    ) {       
      // dialogRef.disableClose = true;
    // To initialize FormGroup  
    this.regiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'),
        Validators.maxLength(11),
    ]),
      address: new FormControl('', [Validators.required])
    })
    
    if(suppDocument != null){
      this.regiForm.patchValue(suppDocument);
    }
  }  
  
  // Executed When Form Is Submitted  
  onImageUpload(event: any){
    this.uploadedImage = event.target.files[0];
  }

  onFormSubmit()  
  {  
    if(this.regiForm.invalid){
      return;
    }
      this.dialogRef.close(this.regiForm.value);
  }  
  }
