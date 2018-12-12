import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { InwardComponent } from './inward/inward.component';
import { OutwardComponent } from './outward/outward.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import {MatDialogModule} from '@angular/material/dialog';

import {DialogOverviewExampleDialog} from './admin/admin.component';

// import {MatDialog, MatDialogRef} from '@angular/material';

import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatDatepicker,  
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  
} from '@angular/material';  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InwardComponent,
    OutwardComponent,
    AdminComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatDialogModule,
    // MatDialog,
    // MatDialogRef,

    MatSlideToggleModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { animation: 'login' } },
      { path: 'inward', component: InwardComponent },
      { path: 'outward', component: OutwardComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/login' },
    
    ], {
        useHash: true
      })
  ],
  
  exports: [  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatDialogModule,
    // MatDialog,
    // MatDialogRef,
    MatSlideToggleModule  
  ],  
  entryComponents: [AdminComponent, DialogOverviewExampleDialog],
 
  
  providers:  [  
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
