import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

@NgModule({
  declarations: [StarComponent],
  exports: [CommonModule, FormsModule, StarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
