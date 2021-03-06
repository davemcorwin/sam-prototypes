import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';

import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedServiceModule } from './service/feed-service.module';
import { FeedItemModule } from './feed-item/feed-item.module';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    FeedRoutingModule,
    FeedServiceModule,
    FeedItemModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
