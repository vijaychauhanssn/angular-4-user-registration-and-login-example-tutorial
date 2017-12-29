import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to npm install
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//end 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './directives/alert/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './view/home/index';
import { LoginComponent } from './view/login/index';
import { RegisterComponent } from './view/register/index';
import { AppHeaderComponent } from './components/app-header/index';
import { AppAsideComponent } from './components/app-aside/index';
import { AppFooterComponent } from './components/app-footer/index';
import { AppSidebarComponent } from './components/app-sidebar/index';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/index';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/index';
import { AppBreadcrumbsComponent } from './components/app-breadcrumbs/index';
import { AsideDirective } from './directives/aside/index';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav-dropdown/index';
import { SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective } from './directives/sidebar/index';
import { DashboardComponent } from './view/dashboard/index';


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
    AppSidebarFooterComponent,
    AppBreadcrumbsComponent,
    AsideDirective,
    NavDropdownDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],

  providers: [
  customHttpProvider,
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
