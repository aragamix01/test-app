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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploadComponent,
    ProjectComponent,
    IndexPageComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FieldsetModule,
    FormsModule,
    NoopAnimationsModule,
    PanelModule,
    CollapseModule.forRoot(),
    FileUploadModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
