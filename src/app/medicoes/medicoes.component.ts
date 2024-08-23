import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MedicoesService } from '../_services/medicoes/medicoes.service';
import { 
  PoContainerModule, 
  PoWidgetModule, 
  PoPageModule, 
  PoModalModule, 
  PoFieldModule, 
  PoDynamicModule,
  PoTableModule, 
  PoModalAction, 
  PoModalComponent, 
  PoButtonModule 
} from '@po-ui/ng-components';


@Component({
  selector: 'app-medicoes',
  standalone: true,
  imports: [
    PoTableModule, 
    PoContainerModule, 
    PoPageModule,
    PoWidgetModule,
    PoModalModule,
    PoFieldModule,
    PoDynamicModule,
    CommonModule,
    PoButtonModule,
    FormsModule
  ],
  templateUrl: './medicoes.component.html',
  styleUrls: ['./medicoes.component.scss']
})
export class MedicoesComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild('optionsForm', { static: true }) form!: NgForm;

  medicoes: any = [];
  selectedItem: any = {};

  close: PoModalAction = {
    action: () => this.closeModal(),
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => this.processOrder(),
    label: 'Confirm'
  };

  constructor(private dataService: MedicoesService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      response => {
        this.medicoes = response.objects; // Supondo que a resposta seja { objects: [...] }
        console.log(this.medicoes);
      },
      error => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }

  columns = [
    { property: 'medicao', label: 'Medição' },
    { property: 'contrato', label: 'Nº Contrato' },
    { property: 'revisao', label: 'Nº Revisao' },
    { property: 'competencia', label: 'Competencia' },
    { property: 'descricao', label: 'Descricao' },
    { property: 'valor', label: 'Valor' }
  ];
  event: string = '';
  changeEvent(event: string) {
    this.event = event;
  }
  openModal(item: any) {

    
    this.selectedItem = item;
    console.log(this.selectedItem)
    this.poModal.open();
  }

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  processOrder() {
    if (this.form.invalid) {
      // Exibir mensagem de erro
      console.error('Escolha os itens para confirmar o pedido.');
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }

  restore() {
    this.form.reset();
  }
}
