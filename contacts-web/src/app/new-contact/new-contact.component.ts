import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  mode=1;
  contact:Contact=new Contact();

  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }
  
  saveContact() {
    this.contactService.saveContact(this.contact)
      .subscribe(data=> {
        this.contact=data;
        this.mode=2;
      }, err=> {
        console.log(err);
      })
  }

}
