import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router:Router) { 
    this.navLinks = [
      {
          label: 'About Will',
          link: './about-will',
          index: 0
      }, {
          label: 'Your Will',
          link: './yourwill',
          index: 1
      }, {
          label: `Who's in your Will`,
          link: './whoinyourwill',
          index: 2
      }, 
  ];
}
  

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });

  }

}
