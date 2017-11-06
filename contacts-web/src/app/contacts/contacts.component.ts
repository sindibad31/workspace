import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  constructor(public http:Http) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/chercherContacts")
     .map(resp=>resp.json())
     .subscribe(data=>{
       this.pageContacts=data;
     },err=>{
       console.log(err);
     })
  }

}
