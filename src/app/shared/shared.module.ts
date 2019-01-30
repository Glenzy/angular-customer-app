import { NgModule } from '@angular/core';

import { CapitalisePipe } from './capitalise.pipe';

@NgModule({
  declarations: [CapitalisePipe],
  exports: [CapitalisePipe]
})
export class SharedModule { 

}
