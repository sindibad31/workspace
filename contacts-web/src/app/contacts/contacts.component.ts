import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  
  constructor(public http:Http, public contactService:ContactsService, public router:Router) { 
  }

  ngOnInit() {
    this.doSearch();
  }
  
  doSearch() {
    this.contactService.getContacts(this.motCle, this.currentPage, this.size);
//      .subscribe(data => {
//        this.pageContacts=data;
//        this.pages = new Array(data.totalPages);
//      }, err => {
//        console.log(err);
//      }
//      )
  }
  
  chercher() {
    this.doSearch();
  }
  
  gotoPage(i:number) {
    this.currentPage = i;
    this.doSearch();
  }
  
  onEditContact(id:number) {
    this.router.navigate(['/editContact', id]);
  }
   onDeleteContact(contact:Contact) {
    let confirm=window.confirm("Etes vous sur de vouloir supprimer ce contact?");
    if(confirm==true) {
      this.contactService.deleteContact(contact.id)
        .subscribe(data=> {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(contact),1
          );  
  //        this.doSearch();
        }, err=> {
          console.log(err);
        })
     }
  }
}
