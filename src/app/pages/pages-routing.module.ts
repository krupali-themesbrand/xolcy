import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LayoutOne1Component } from './layout-one1/layout-one1.component';
import { LayoutOne2Component } from './layout-one2/layout-one2.component';
import { LayoutOne3Component } from './layout-one3/layout-one3.component';
import { LayoutOne4Component } from './layout-one4/layout-one4.component';
import { LayoutOne5Component } from './layout-one5/layout-one5.component';
import { LayoutOne6Component } from './layout-one6/layout-one6.component';
import { LayoutTwo1Component } from './layout-two1/layout-two1.component';
import { LayoutTwo2Component } from './layout-two2/layout-two2.component';
import { LayoutTwo3Component } from './layout-two3/layout-two3.component';
import { LayoutTwo4Component } from './layout-two4/layout-two4.component';
import { LayoutTwo5Component } from './layout-two5/layout-two5.component';
import { LayoutTwo6Component } from './layout-two6/layout-two6.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'layout-one-1',
    component: LayoutOne1Component
  },
  {
    path: 'layout-one-2',
    component: LayoutOne2Component
  },
  {
    path: 'layout-one-3',
    component: LayoutOne3Component
  },
  {
    path: 'layout-one-4',
    component: LayoutOne4Component
  },
  {
    path: 'layout-one-5',
    component: LayoutOne5Component
  },
  {
    path: 'layout-one-6',
    component: LayoutOne6Component
  },
  {
    path: 'layout-two-1',
    component: LayoutTwo1Component
  },
  {
    path: 'layout-two-2',
    component: LayoutTwo2Component
  },
  {
    path: 'layout-two-3',
    component: LayoutTwo3Component
  },
  {
    path: 'layout-two-4',
    component: LayoutTwo4Component
  },
  {
    path: 'layout-two-5',
    component: LayoutTwo5Component
  },
  {
    path: 'layout-two-6',
    component: LayoutTwo6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
