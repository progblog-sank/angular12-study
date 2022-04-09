import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CmsService } from 'src/app/service/cms.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    title: [''],
    name: [''],
    email: [''],
    content: ['']
  });

  constructor(private fb: FormBuilder, private service: CmsService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.postContactContent(this.contactForm.value).subscribe(res => {
      if ('id' in res) {
        this.openSnackBar("送信成功しました。")
      }
    })
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }

}
