import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';  

import {
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule
  } from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { HelpItemModule } from './help-item/help-item.module';
import { HelpServiceModule } from './service/service.module';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    FormlyModule,
    FormlySelectModule,
    SdsFiltersModule, 
    SdsSubheaderModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SearchListServiceModule,
    HelpItemModule,
    HelpServiceModule,
    HelpRoutingModule
  ],
  exports: [HelpComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class HelpModule { }
