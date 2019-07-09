import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PnmlistComponent } from './components/pnmlist/pnmlist.component';
import { NewpnmComponent } from './components/newpnm/newpnm.component';
import { EditpnmComponent } from './components/editpnm/editpnm.component';
import { PnmComponent } from './components/pnm/pnm.component';
import { MatGridListModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
const routes: Routes = [
  { path: 'newpnm/:access', component: NewpnmComponent },
  { path: 'editpnm/:id/:access', component: EditpnmComponent },
  { path: 'pnm/:id/:access', component: PnmComponent },
  { path: 'list/:access', component: PnmlistComponent },
  { path: '', redirectTo: '/list/0', pathMatch: 'full'},
  { path: 'newpnm', redirectTo: '/newpnm/-1', pathMatch: 'full'}  ];


@NgModule({
  declarations: [
    AppComponent,
    PnmlistComponent,
    NewpnmComponent,
    EditpnmComponent,
    PnmComponent
  ],
  imports: [
	MatGridListModule,
	ReactiveFormsModule,
    BrowserModule,
    NoopAnimationsModule,
	RouterModule.forRoot(routes),
	HttpClientModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule,
	MatOptionModule,
	MatSelectModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatTableModule,
	MatDividerModule,
	MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
