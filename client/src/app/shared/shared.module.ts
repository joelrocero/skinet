import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PagerComponent } from './components/pager/pager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';

@NgModule({
  declarations: [PagerComponent, PagingHeaderComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    CarouselModule,
    PagerComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
