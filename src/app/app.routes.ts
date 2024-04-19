import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { UpdateBrandFormComponent } from './features/brands/components/update-brand-form/update-brand-form.component';

export const routes: Routes = [
  // Home
  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: MainLayoutComponent,
    children: [
      {
        path: "models", // /home/models
        component: HomePageComponent,
      }
    ]
  },
  // Test Page
  {
    path: 'layout-test',
    component: TestPageComponent
  },
  // Create Brand Page
  {
    path: 'brands/create',
    component: CreateBrandPageComponent,
  },
  {
    path: 'brands/:id',
    component: UpdateBrandFormComponent,
  },
  // 404 Not Found Page
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  }
];
