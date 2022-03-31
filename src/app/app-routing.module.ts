import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { MediaComponent } from './pages/media/media.component'
import { MediaSlugComponent } from './pages/media-slug/media-slug.component'
import { ContactComponent } from './pages/contact/contact.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'media/:id', component: MediaSlugComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
