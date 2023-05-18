import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, interval, map, pipe, Subscription, tap, timeInterval } from 'rxjs';
import { IspHomeCarico } from 'src/app/interfaces/IsPHomeCarico';
import { HomeCaricoService } from 'src/app/services/home-carico/home-carico.service';

@Component({
  selector: 'app-home-carico-view',
  templateUrl: './home-carico-view.component.html',
  styleUrls: ['./home-carico-view.component.scss'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class HomeCaricoViewComponent implements OnInit ,OnDestroy{

  //  listLength: number = 100;
  
  //  displayedColumns: string[] = ['select','società','tipo' ,'fatturato','numOrd','qta','startDate', 'customer','cliente','pivaCf','cap','prov','tecnicoZona'];  

  //  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  //  expandedElement !: IspHomeCarico | null;

  //  public homeCaricoSubcription?: Subscription;

  // public list: IspHomeCarico[] = [];
  // public listSp: IspHomeCarico[] = [];
  // public dataSourceSp: MatTableDataSource<IspHomeCarico> = new MatTableDataSource<IspHomeCarico>([]);
  // public dataSource: MatTableDataSource<IspHomeCarico> = new MatTableDataSource<IspHomeCarico>([]);
  // public backupSelected?: IspHomeCarico;

  // public isLoading: Boolean = false;

  // @ViewChild(MatSort, {static:true}) sort: any;
  // @ViewChild(MatPaginator, {static:true}) paginator: any;

  // selection = new SelectionModel<IspHomeCarico>(true, []);
  // homeCarichi: IspHomeCarico[] = [];
  // idsHomeCarico: number[] = [];
  // selectRowsHomeCarico: IspHomeCarico[] = [];


  // isFilter: boolean = false;
  // IsShowFilter: boolean = true;

  // tipo: string = "-1";
  // provincia: string = "-1";
  // tecnicoZona: string = "-1";
  // societa: string = "-1";
  // pivacf: string = "";
  // codCliente: string = "";
  // cliente: string = "";
  // cap: string = "";
  // citta: string = "";

  // totalQuantity: number = 0;
  // totalQuantityAssegnazione: number = 0;

  

  constructor(private homeCaricoService: HomeCaricoService, private fb: FormBuilder, private _snackBar: MatSnackBar){
  }

  assegna(event: any){
    console.log(event,"cioa");
  }

  // private getAllList(){
    
  //   this.isLoading = true;
  //   this.homeCaricoSubcription = this.homeCaricoService.getSpCoursesObservable
  //   .pipe(
  //     tap((resp: IspHomeCarico[]) =>{
  //       this.totalQuantity = 0;
  //       for(let rowHomeCarico of resp){
  //         this.totalQuantity += rowHomeCarico.qta;
  //       }
  //     })
  //   )
  //   .subscribe
  //     ((resp: IspHomeCarico[])=>{
  //       this.list = resp;
  //       this.homeCarichi = resp;
  //       this.updateColumnPossition();
  //       this.dataSource = new MatTableDataSource(this.list);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.paginator?.firstPage();
  //       if(this.list.length > 0){
  //         this.isLoading = false;
  //       }
  //   },
  //   error =>{
  //     console.log("home carico view ",error.message);
  //   }
  //   );
  // }

  ngOnDestroy(): void {
    //this.homeCaricoSubcription?.unsubscribe();
  }

  ngOnInit(): void {
    //change filtro
    //this.updateList();
  }

  // updateList(){
  //   this.homeCaricoService.refreshSpHomeCaricoObsrvable();
  //   this.getAllList();
  // }

  // applyFilter(event: Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // //recaric filtro

  // loadConvocationIds(){
  //   let homecaricoIds: number[] = [];
  //   for(let rowhomeCarico of this.homeCarichi){
  //     if(this.selection.isSelected(rowhomeCarico)){
  //       this.idsHomeCarico.push(rowhomeCarico.id);
  //     }
  //   }
  // }

  // private updateColumnPossition(){
  //   for(let i = 0; i < this.homeCarichi.length; i++){
  //      this.homeCarichi[i].position = i;
  //      this.homeCarichi[i].id = i;
  //   }
  //  }

  // isSelectedIdsRow(){
  //   return this.listLength > 0;
  // }

  // checkIsSelectedIdsRow(): boolean{
  //   if(!this.isSelectedIdsRow()){
  //     alert("nessuna riga selezionata!");
  //     return false;
  //   }
  //   return true;
  // }

  // isAllSelected() { 
  //   const numSelected = this.selection.selected.length;
  //   //const numRows = this.dataSource.data.length;
  //   const numRows = this.homeCarichi.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }
  //   //this.selection.select(...this.dataSource.data);
  //   this.selection.clear();
  //   this.selection.select(...this.homeCarichi);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: IspHomeCarico): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  // //fine gestione checkboxs

  // addBackgroundYellow(row: IspHomeCarico): boolean{
  //   return this.selection.isSelected(row)
  // }

  // assegna(){
  //   let selectRows = this.homeCarichi.filter(row => this.selection.isSelected(row));
  //   console.log("assegna",selectRows);
  //   if(selectRows.length > 0){
  //     this.homeCarichi = this.homeCarichi.filter(row => !this.selection.isSelected(row))
  //     this.homeCaricoService.setSpHomeCaricoObservable = this.homeCarichi;
  //     this.homeCaricoService.getSpCoursesObservable.subscribe(resp =>{
  //       this.alertUpdate("Assegnazione effettuata con successo!", 3000);
  //     });
      
  //     return;
  //   }
  //   this.alertUpdate("Nessuna riga selezionata!", 3000);
  // }

  //  alertUpdate(messagge: string, duration: number){
  //   this._snackBar.open(messagge,"",{
  //     duration,
  //     horizontalPosition:"center",
  //     verticalPosition: "bottom"
  //   });
  // }

  // hideFilter(){
  //   this.IsShowFilter = !this.IsShowFilter;
  // }

  // showFilter(){
  //   this.IsShowFilter = !this.IsShowFilter;
  // }

  // checkCalQuantity(){
  //   this.totalQuantityAssegnazione = 0;
  //   for(let rowHomeCarico of this.homeCarichi){
  //     if(this.selection.isSelected(rowHomeCarico)){
  //       this.totalQuantityAssegnazione += rowHomeCarico.qta;
  //     }
  //   }
  // }

}
