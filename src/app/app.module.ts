import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TableWorkingComponent } from './table-working/table-working.component';
import { TableErrorComponent } from './table-error/table-error.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TableHermesComponent } from './table-hermes/table-hermes.component';
import { TableMiddlewareComponent } from './table-middleware/table-middleware.component';
import { TableHermesWorkingComponent } from './table-hermes-working/table-hermes-working.component';
import { TableHermesErrorComponent } from './table-hermes-error/table-hermes-error.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './interceptors/network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableWorkingComponent,
    TableErrorComponent,
    SidebarComponent,
    HomeComponent,
    TableHermesComponent,
    TableMiddlewareComponent,
    TableHermesWorkingComponent,
    TableHermesErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
