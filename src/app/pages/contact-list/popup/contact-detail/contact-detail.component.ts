import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CmsService } from 'src/app/service/cms.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: CmsService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sentEmail(email: string) {
    return 'mailto:' + email
  }

  alreadyRead(elm: any) {
    elm.alreadyRead = true
    delete elm.createdAt;
    delete elm.updatedAt
    delete elm.publishedAt
    delete elm.revisedAt
    this.service.patchContactContent(elm.id, elm).subscribe(() => {
      this.openSnackBar("既読にしました。")
      this.dialog.closeAll()
    })
  }

  deleteFlag(elm: any) {
    elm.delete = true
    delete elm.createdAt;
    delete elm.updatedAt
    delete elm.publishedAt
    delete elm.revisedAt
    this.service.patchContactContent(elm.id, elm).subscribe(() => {
      this.openSnackBar("削除しました。")
      this.dialog.closeAll()
    })
  }

  openSnackBar(msg: string) {
    let snackBarRef = this.snackBar.open(msg, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('更新しました')
    });
  }

}
