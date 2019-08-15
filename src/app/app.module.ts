import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SamModelService } from './model/sam-model.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicWorkspaceComponent } from './workspace/public-workspace.component';
import { SdsHeaderModule, SdsFooterModule } from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';



const appIcons = {
  // App Specific Icons
 };

@NgModule({
  declarations: [
    AppComponent,
    PublicWorkspaceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SdsHeaderModule,
    SdsFooterModule,
    FormlyModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PublicWorkspaceComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [SamModelService]
    };
  }
  constructor() {
  // library.add(sdsIcons, appIcons);
  }
}
