import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {}

  apiUrl = 'https://www.stingeraustralia.com.au/stk/api.php';

  cheese() {
    alert('TEST');
  }

  fetchData() {
    this.http.get(this.apiUrl).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
