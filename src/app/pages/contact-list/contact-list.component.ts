import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CmsService } from '../../service/cms.service'
import { ContactDetailComponent } from './popup/contact-detail/contact-detail.component';


export interface ContactList {
  title: string;
  name: string;
  email: string;
  content: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'title', 'name', 'email', 'content'];
  dataSource = new MatTableDataSource<ContactList>();
  selection = new SelectionModel<ContactList>(true, []);
  constructor(private service: CmsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getContactList()
  }

  getContactList(): void {
    this.service.getContactList().subscribe(res => {
      this.dataSource.data = res.contents;
    })
  }
  /** Whether the number of selected elements matches the total number of rows. */
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
  checkboxLabel(row?: ContactList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }

  openDetail(row: ContactList) {
    const dialogRef = this.dialog.open(ContactDetailComponent, {
      width: '500px',
      data: { row: row },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  clamp(text: string) {
    return text.substr(0, 20) + '...'
  }
}

