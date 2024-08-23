import { Component,OnInit, ViewChild } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { PoModule } from '@po-ui/ng-components'; // Importe o PoModule
import { SidebarService } from '../_services/sideBar/sidebar.service';
import { FormContractService } from '../_services/form/form-contract.service';
import {
  PoPageModule, 
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDynamicFormComponent,
  PoDynamicModule,
  PoModalModule,
  PoFieldModule,
  PoButtonModule  
   
} from '@po-ui/ng-components';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PoPageModule, 
    PoPageModule,
    PoDynamicModule,
    PoModalModule, 
    PoFieldModule,
    PoButtonModule,
    FormsModule,
    PoModule,
    
  ],
  providers: [SidebarService, FormContractService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  public poModalAction: PoModalAction | undefined = undefined;
  content = '';
  size = 'lg';
  title = '';
  icon: string = '';

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string = '';
  primaryActionProperties: Array<string> = [];


  YesOrNot: Array<PoSelectOption> = [
    { value: 'Sim', label: 'Sim' },
    { value: 'Não', label: 'Não' }
  ]
  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string = '';
  secondaryActionProperties: Array<string> = [];
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string> = [];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = '';
    this.content = '';
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = '';
    this.primaryActionProperties = [];
    this.secondaryActionLabel = '';
    this.secondaryActionProperties = [];
    this.icon = '';
  }


}
