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
// import {MatListOption} from '@angular/material/list';
// Layout
import { HeaderComponent } from './layouts/header/header.component';

// Parts
import { NavListComponent } from './parts/nav-list/nav-list.component'

// Service
import { UtilsService } from './service/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavListComponent,
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
