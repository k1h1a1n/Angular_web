import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutWillComponent } from './about-will/about-will.component';
import { HomeComponent } from './home/home.component';
import { WhoinyourwillComponent } from './whoinyourwill/whoinyourwill.component';
import { YourwillComponent } from './yourwill/yourwill.component';

const routes: Routes = [
  { path: '', redirectTo : 'home' ,pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,
  children : [{ path: 'about-will', component: AboutWillComponent },
  { path: 'yourwill', component: YourwillComponent },
  { path: 'whoinyourwill', component: WhoinyourwillComponent },      
] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
