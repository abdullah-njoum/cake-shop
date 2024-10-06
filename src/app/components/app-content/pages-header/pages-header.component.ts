import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  standalone: true,
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss']
})
export class PagesHeaderComponent implements OnInit {
  pageTitle = input.required<string>();
  constructor() { }

  ngOnInit() {
  }

}
