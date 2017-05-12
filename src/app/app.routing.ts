import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'members/:id',
    component: MemberComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
