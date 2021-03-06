import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListEntityDataItemComponent } from './search-list-item-entity.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';

@NgModule({
  declarations: [SearchResultListEntityDataItemComponent],
  imports: [
    CommonModule,  
    RouterModule, 
    FontAwesomeModule,
    FormsModule,
    SdsActionsMenuModule

  ], exports: [SearchResultListEntityDataItemComponent]
})
export class SearchResultListEntityDataItemModule {
  constructor() {
    library.add(fas, sds);
  }
}
