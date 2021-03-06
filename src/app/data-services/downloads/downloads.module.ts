import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { SdsSearchModule } from '@gsa-sam/components';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    SdsSearchModule,
    DownloadsRoutingModule
  ],
  exports: [DownloadsComponent]
})
export class DownloadsModule { }
