import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { IContratto } from 'src/app/interfaces/IContratto';
import { IOrdine } from 'src/app/interfaces/IOrdine';


const ELEMENT_DATA: IOrdine[] = [
  {numeroOrdine: "09/0020515", ragioneSociale: 'BORDIGNON FRANCESCO & F.LLI SNC '},
  {numeroOrdine: "22/0124413", ragioneSociale: 'ELECTRON DI MENINI MIRKO E ERIKA SNC '},
  {numeroOrdine: "22/0016813", ragioneSociale: 'NAMASTE SRL - HOTEL POSILLIPO'},
  {numeroOrdine: "22/0061107", ragioneSociale: 'CIANI CLAUDIO & C. SNC'},
  {numeroOrdine: "21/0213713", ragioneSociale: 'CANTIERE NAUTICO MORRI E PARA DI PARA VALTER'},
  {numeroOrdine: "22/0190607", ragioneSociale: 'ANDRUCCIOLI BRUNO MIRKO E FABIO S.S.'},
  {numeroOrdine: "21/0043913", ragioneSociale: 'SCHUCO INTERNATIONAL ITALIA SRL'},
  {numeroOrdine: "21/0010330", ragioneSociale: 'ARTE DI ZANOLI ROSANGELA                '},
  {numeroOrdine: "21/0059513", ragioneSociale: 'IL VOLANTE SAS DI GIUSEPPE GUARINO & C.'}
];

const ELEMENT_DATA_CONTRACT: IContratto[] = [
  {tipoEstintore: '1', tipoCarrello: '1', tipoInstallazione: '1', immagine: '1', descrizione: '1'},
  {tipoEstintore: '2', tipoCarrello: '2', tipoInstallazione: '2', immagine: '2', descrizione: '2'},
  {tipoEstintore: '3', tipoCarrello: '3', tipoInstallazione: '3', immagine: '3', descrizione: '3'},
  {tipoEstintore: '4', tipoCarrello: '4', tipoInstallazione: '4', immagine: '4', descrizione: '4'},
  {tipoEstintore: '5', tipoCarrello: '5', tipoInstallazione: '5', immagine: '5', descrizione: '5'}
];


@Component({
  selector: 'app-lista-ordini',
  templateUrl: './lista-ordini.component.html',
  styleUrls: ['./lista-ordini.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ListaOrdiniComponent implements OnInit{

  listLength: number = 5;

  displayedColumns: string[] = ['numeroOrdine', 'ragioneSociale'];

  public list: IOrdine[] = [];
  public dataSource: MatTableDataSource<IOrdine> = new MatTableDataSource<IOrdine>([]);

  public isLoading: Boolean = true;

  @ViewChild(MatSort, {static:true}) sort: any;
  @ViewChild(MatPaginator, {static:true}) paginator: any;

//////

displayedColumnsCantract: string[] = ['tipoEstintore', 'tipoCarrello', 'tipoInstallazione'];

columnsToDisplayWithExpand = [...this.displayedColumnsCantract, 'expand'];
expandedElement !: IContratto | null;

isVisibleTabContratti: boolean = false;

@ViewChild(MatTabGroup) tabGroup !: MatTabGroup;

public listContract: IContratto[] = [];
public dataSourceContract: MatTableDataSource<IContratto> = new MatTableDataSource<IContratto>([]);

  constructor(){

  }
  ngOnInit(): void {
    this.getAllList();
    this.getListContract();
  }

  private getAllList(){
    this.isLoading = true;
    this.list = ELEMENT_DATA
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator?.firstPage();
    this.isLoading = false;
  }

  private getListContract(){
    this.isLoading = true;
    this.listContract = ELEMENT_DATA_CONTRACT
    this.dataSourceContract = new MatTableDataSource(this.listContract);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator?.firstPage();
    this.isLoading = false;
  }

  updateList(){
    this.getAllList();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBackgroundColorRow(row: IOrdine){
   
  }

  openContracts(){
    this.isVisibleTabContratti = true;
    this.tabGroup.selectedIndex = 1;
  }

}
