import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/index';
import { LoginComponent } from './view/login/index';
import { RegisterComponent } from './view/register/index';
import { AuthGuard } from './guards/index';
import { AppHeaderComponent } from './components/app-header/index';
import { AppAsideComponent } from './components/app-aside/index';
import { AppFooterComponent } from './components/app-footer/index';
import { AppSidebarComponent } from './components/app-sidebar/index';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/index';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/index';
import { AppBreadcrumbsComponent } from './components/app-breadcrumbs/index';

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
    pathMatch: 'full',
    path: '**', redirectTo: ''
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
