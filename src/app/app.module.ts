import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { ProgressSidenavComponent } from './components/progress-sidenav/progress-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    PopupComponent,
    HeaderComponent,
    DeleteConfirmationComponent,
    ProgressSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [DatePipe]
})
export class AppModule { }
