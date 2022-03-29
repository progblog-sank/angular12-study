import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

// Layout
import { HeaderComponent } from './layouts/header/header.component';

// Parts
import { NavListComponent } from './parts/nav-list/nav-list.component'

// Service
import { UtilsService } from './service/utils.service';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MediaComponent } from './pages/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavListComponent,
    HomeComponent,
    ContactComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // MatListOption,
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
