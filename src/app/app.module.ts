import { ChartModule } from 'primeng/primeng';
import { AppService } from './app.service';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {PanelModule} from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FileUploadComponent } from './index-page/file-upload/file-upload.component';
import {FileUploadModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { ProjectComponent } from './index-page/project/project.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { CustomerComponent } from './index-page/project/customer/customer.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { EmpPageComponent } from './emp-page/emp-page.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'detail', component: DetailPageComponent },
  { path: 'employee', component: EmpPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    ProjectComponent,
    IndexPageComponent,
    CustomerComponent,
    DetailPageComponent,
    EmpPageComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    DropdownModule,
    FieldsetModule,
    FormsModule,
    NoopAnimationsModule,
    PanelModule,
    CollapseModule.forRoot(),
    FileUploadModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
