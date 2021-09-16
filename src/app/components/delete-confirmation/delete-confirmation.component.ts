import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public user: any, private dataService: DataService) { }

  ngOnInit(): void {
  }
  delete() {
    const index = this.dataService.userList.findIndex(x => x.id == this.user.userDetails.id);
    this.dataService.userList.splice(index, 1);
    this.dialogRef.close();
  }

}
