import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { TittleComponent } from './../core/components/tittle/tittle.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent,TittleComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
