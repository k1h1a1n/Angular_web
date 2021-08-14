import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AboutWillComponent } from './about-will/about-will.component';
import { YourwillComponent } from './yourwill/yourwill.component';
import { WhoinyourwillComponent } from './whoinyourwill/whoinyourwill.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { ScriptService } from './about-will/script/script.service';
import { ApiService } from './about-will/script/api.service';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    AboutWillComponent,
    YourwillComponent,
    WhoinyourwillComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule ,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [ScriptService,ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
