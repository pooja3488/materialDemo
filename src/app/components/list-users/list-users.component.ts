import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { IUserModel } from 'src/app/models/users-model';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['select', 'fullName', 'emailId', 'gender', 'address', 'Date of Birth', 'action'];
  dataSource = new MatTableDataSource<IUserModel>();
  selection = new SelectionModel<IUserModel>(true, []);
  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IUserModel>(this.dataService.userList)
    this.selection = new SelectionModel<IUserModel>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IUserModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fullName + 1}`;
  }

  openEditDialog(item?: IUserModel) {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '500px',
      width: '700px',
      data: { userDetails: item, isEditMode: item ? true : false },
      hasBackdrop: false,
      backdropClass: 'backdropBackground'
    });


    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource<IUserModel>(this.dataService.userList)
    });
  }
  openDeleteDialog(item: IUserModel) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      height: '200px',
      width: '500px',
      data: { userDetails: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource<IUserModel>(this.dataService.userList)
    });
  }
}

