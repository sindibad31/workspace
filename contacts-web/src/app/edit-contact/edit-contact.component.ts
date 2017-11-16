import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
//import { Params } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact = new Contact();
  id:number;
//  private router:Router, 
  constructor(public activatedRoute:ActivatedRoute, public contactService:ContactsService) {}

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.contactService.getContact(this.id)
      .subscribe(data=> {
       this.contact=data; 
      }, err=> {
          console.log(err);
        }
      )
  }

  updateContact() {
    this.contactService.updateContact(this.contact)
      .subscribe(data=> {
        this.mode=2;
      }, err=> {
        console.log(err);
      })
  }
}
