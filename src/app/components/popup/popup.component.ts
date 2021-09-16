import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserModel } from 'src/app/models/users-model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  userForm: FormGroup = this.fb.group({});
  constructor(public dialogRef: MatDialogRef<PopupComponent>, public datepipe: DatePipe, @Inject(MAT_DIALOG_DATA) public user: any, private fb: FormBuilder, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.user.userDetails?.fullName, [Validators.required]],
      email: [this.user.userDetails?.emailId, [Validators.required]],
      gender: [this.user.userDetails?.gender ?? 'Male', [Validators.required]],
      DOB: [new Date(this.user.userDetails?.DOB), [Validators.required]],
      address: [this.user.userDetails?.address, [Validators.required]],
    });
  }
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    if (this.user.isEditMode) {
      this.dataService.userList.forEach(x => {
        if (x.id == this.user.userDetails.id) {
          x.fullName = this.userForm.controls.name.value,
            x.emailId = this.userForm.controls.email.value,
            x.gender = this.userForm.controls.gender.value,
            x.DOB = this.datepipe.transform(this.userForm.controls.DOB.value, 'dd/mm/yyyy') ?? '',
            x.address = this.userForm.controls.address.value
        }
      })
    }
    else {
      const userData: IUserModel = {
        id: this.dataService.userList.length + 1,
        fullName: this.userForm.controls.name.value,
        emailId: this.userForm.controls.email.value,
        address: this.userForm.controls.address.value,
        gender: this.userForm.controls.gender.value,
        DOB: this.datepipe.transform(this.userForm.controls.DOB.value, 'dd/mm/yyyy') ?? '',
      }
      this.dataService.userList.push(userData);
    }
    this.dialogRef.close();
  }

}
