import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-progress-sidenav',
  templateUrl: './progress-sidenav.component.html',
  styleUrls: ['./progress-sidenav.component.scss']
})
export class ProgressSidenavComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  getEmployeesCount(param: string) {
    return this.dataService.userList.filter(x => x.gender.toLowerCase() == param.toLowerCase()).length
  }

}
