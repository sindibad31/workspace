import { Contact } from '../../model/model.contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact;
  constructor() { }

  ngOnInit() {
  }

  editContact(contact:Contact) {
  }
}
