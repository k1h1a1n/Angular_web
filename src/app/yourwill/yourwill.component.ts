import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-yourwill',
  templateUrl: './yourwill.component.html',
  styleUrls: ['./yourwill.component.scss']
})
export class YourwillComponent implements OnInit {
  panelOpenState = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { 
    this.matIconRegistry.addSvgIcon(
      "arrowback",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/arrowback.svg")
    );
  }

  ngOnInit(): void {
  }

}
