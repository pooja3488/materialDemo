import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserModel } from 'src/app/models/users-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: IUserModel[] = [
    {
      id: 1,
      fullName: 'John',
      emailId: 'john@gmail.com',
      gender: 'Male',
      address: 'Pune',
      DOB: '03/01/1999'
    },
    {
      id: 2,
      fullName: 'Pooja',
      emailId: 'pooja@gmail.com',
      gender: 'Female',
      address: 'Mumbai',
      DOB: '09/10/1995'
    },
    {
      id: 3,
      fullName: 'Suraj',
      emailId: 'suraj@gmail.com',
      gender: 'Male',
      address: 'Mumbai',
      DOB: '10/10/1996'
    },
    {
      id: 4,
      fullName: 'Ayush',
      emailId: 'ayush@gmail.com',
      gender: 'Male',
      address: 'Banaras',
      DOB: '12/10/1999'
    },
    {
      id: 5,
      fullName: 'Anand',
      emailId: 'anand@gmail.com',
      gender: 'Male',
      address: 'Kanpur',
      DOB: '07/29/1995'
    }
  ];
  constructor() { }

  // getUsers(): Observable<IUserModel[]> {
  //   return of(this.userList)
  // }
}
