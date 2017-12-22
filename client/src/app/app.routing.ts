import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AppHeaderComponent } from './components/app-header/index';
import { AppAsideComponent } from './components/app-aside/index';
import { AppFooterComponent } from './components/app-footer/index';
import { AppSidebarComponent } from './components/app-sidebar/index';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/index';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/index';

const appRoutes: Routes = [
    { 
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard] 
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    },
    // otherwise redirect to home
    { 
    path: '**',
    redirectTo: 'login'
    },
    {
    path: '',
    component: AppAsideComponent,
    },
    {
    path: '',
    component: AppHeaderComponent,
    },
    {
    path: '',
    component: AppSidebarComponent,
    },
    {
    path: '',
    component: AppSidebarHeaderComponent,
    },
    {
    path: '',
    component: AppSidebarFooterComponent,
    }
];

export const routing = RouterModule.forRoot(appRoutes);
