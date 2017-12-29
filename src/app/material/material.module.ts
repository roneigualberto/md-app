import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';


const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
  declarations: []
})
export class MaterialModule { 


}
