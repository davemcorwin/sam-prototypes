import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { helpNavigationData} from './navigation/navigation.data';
import { HelpFiltersService } from './help-filters/help-filters.service';

import { HelpService } from './service/help.service';

@Component({
  selector: 'sam-help',
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit, AfterViewInit {

  public sideNavModel: SideNavigationModel = helpNavigationData;

  form = new FormGroup({});
  public filterChange$ = new BehaviorSubject<object>(null);  

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private change: ChangeDetectorRef, public service: HelpService, public filtersService: HelpFiltersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {      
    this.change.detectChanges();
  }

  newSearch(searchTerm) {
    if(this.filtersService) {
        this.filtersService.model = {};
        this.filtersService.model["keyword"] = searchTerm;
    }
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}