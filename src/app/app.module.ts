import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClasseComponent } from './pages/classe/classe.component';
import { CourComponent } from './pages/cour/cour.component';
import { EleveComponent } from './pages/eleve/eleve.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogClasseComponent } from './components/dialog-classe/dialog-classe.component';
import { DialogEcoleComponent } from './components/dialog-ecole/dialog-ecole.component';
import { DialogCourComponent } from './components/dialog-cour/dialog-cour.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ClasseComponent,
    CourComponent,
    EleveComponent,
    AcceuilComponent,
    AproposComponent,
    NotfoundComponent,
    DialogClasseComponent,
    DialogEcoleComponent,
    DialogCourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
