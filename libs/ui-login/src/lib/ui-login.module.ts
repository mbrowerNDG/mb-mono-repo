import { MaterialModule } from '@workshop/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule,
            MaterialModule  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class UiLoginModule {}
