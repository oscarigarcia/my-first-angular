import { NgModule } from '@angular/core';

import { ProductDetailGuard } from './product-detail.guard';
import { ConvertToSpacePipe } from './../shared/convert-to-space.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
