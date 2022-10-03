import { Component, OnInit } from '@angular/core';
import { PersonElements } from './person-element';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonFormComponent } from './person-form/person-form.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-01-persons';
  panelOpenState = false;
  // documentDataSource! : PersonElements;
  dataSource = ELEMENT_DATA;
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  create(){
    const dialogRef = this.dialog.open(PersonFormComponent, {
      autoFocus: false,
      width: '500px',
      // disableClose: true,
      backdropClass: 'transparent-backdrop',
  });

  dialogRef.afterClosed().subscribe((data) => {
    if (data != undefined) {
          this.dataSource.push(data);
    }
  });
  
}
  openForm(data:any, index:number){    
    const dialogRef = this.dialog.open(PersonFormComponent, {
      autoFocus: false,
      width: '500px',
      // disableClose: true,
      backdropClass: 'transparent-backdrop',
      data: { ...data },
  });

  dialogRef.afterClosed().subscribe((data) => {    
      if (data != undefined) {
            this.dataSource[index] = data;                                                 
        }
  });
  };

  deletePerson(i:number){
      this.dataSource.splice(i, 1);      
  }
}
  const ELEMENT_DATA: PersonElements[] = [
    { name: 'Test', email: 'test@test.com', phone: '7895896875', address: 'test'},
    { name: 'Test1', email: 'test@test.com', phone: '7895896875', address: 'test'}
  ];
