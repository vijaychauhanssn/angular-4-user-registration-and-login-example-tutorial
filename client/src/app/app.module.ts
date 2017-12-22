import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AppHeaderComponent } from './components/app-header/index';
import { AppAsideComponent } from './components/app-aside/index';
import { AppFooterComponent } from './components/app-footer/index';
import { AppSidebarComponent } from './components/app-sidebar/index';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/index';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/index';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    AppAsideComponent,
    AppFooterComponent,
    AppSidebarComponent,
    AppSidebarHeaderComponent,
    AppSidebarFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
  customHttpProvider,
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
