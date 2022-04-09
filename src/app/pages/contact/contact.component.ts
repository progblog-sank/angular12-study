import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

onSubmit() {
  console.log(this.contactForm.status);
}

}
