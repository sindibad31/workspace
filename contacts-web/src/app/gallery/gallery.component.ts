import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhoto: any;
  loading = false;
  total = 0;
  page = 1;
  perPage = 12;
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.page = 1;
    this.search(dataForm);
  }

  search(dataForm) {
    this.loading = true;
    console.log("https://pixabay.com/api/?key=7124647-1e73ba23927d6d958d698da14&q=" + dataForm.motCle + "&per_page="+ this.perPage +"&page="+this.page);
    this.http.get("https://pixabay.com/api/?key=7124647-1e73ba23927d6d958d698da14&q=" + dataForm.motCle + "&per_page="+ this.perPage +"&page="+this.page)
      .map(resp => resp.json())
      .subscribe(data => {
        this.pagePhoto = data.hits;
        this.total = data.totalHits;
        this.loading = false;
      })
  }


  goToPage(n: number, dataForm): void {
    this.page = n;
    this.search(dataForm);
  }

  onNext(dataForm): void {
    this.page++;
    this.search(dataForm);
  }

  onPrev(dataForm): void {
    this.page--;
    this.search(dataForm);
  }
}
