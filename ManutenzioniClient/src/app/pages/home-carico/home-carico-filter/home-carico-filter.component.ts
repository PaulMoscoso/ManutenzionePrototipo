import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { IspHomeCarico } from 'src/app/interfaces/IsPHomeCarico';
import { HomeCaricoService } from 'src/app/services/home-carico/home-carico.service';

@Component({
  selector: 'app-home-carico-filter',
  templateUrl: './home-carico-filter.component.html',
  styleUrls: ['./home-carico-filter.component.scss']
})
export class HomeCaricoFilterComponent implements OnInit, OnDestroy {

  tipo: string = "-1";
  provincia: string = "-1";
  tecnicoZona: string = "-1";
  societa: string = "-1";
  pivacf: string = "";
  codCliente: string = "";
  cliente: string = "";
  cap: string = "";
  citta: string = "";

  list: IspHomeCarico[] = [];
  isFilter: boolean = false;

  public filterForm! : FormGroup;

  public homeCaricoSubcription?: Subscription;

  constructor(private homeCaricoService: HomeCaricoService,private fb: FormBuilder){
    this.filterForm = this.fb.group({
      tipo:["-1"],
      societa: ['-1'],
      pivacf:[''],
      codCliente: [''],
      cliente:[''],
      cap: [''],
      provincia:['-1  '],
      citta:[],
      tecnicoZona:['-1']
    });

  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.filterForm.get("pivacf")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(resp =>{
      console.log(resp)
      this.pivacf = resp;
      this.loadDataSp();
    });

    this.filterForm.get("codCliente")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(resp =>{
      console.log(resp)
      this.codCliente = resp;
      this.loadDataSp();
    });

    this.filterForm.get("cliente")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(resp =>{
      console.log(resp)
      this.cliente = resp;
      this.loadDataSp();
    });

    this.filterForm.get("cap")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(resp =>{
      console.log(resp)
      this.cap = resp;
      this.loadDataSp();
    });

    this.filterForm.get("citta")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(resp =>{
      console.log(resp)
      this.citta = resp;
      this.loadDataSp();
    });

    this.homeCaricoService.getTipoObservable.subscribe(tipo =>{
      this.tipo = tipo;
      this.loadDataSp();
    });

    this.homeCaricoService.getProvinciaObservable.subscribe(provincia =>{
      this.provincia = provincia;
      this.loadDataSp();
    });

    this.homeCaricoService.getTecnicoZonaObservable.subscribe(tecnicoZona =>{
      this.tecnicoZona = tecnicoZona;
      this.loadDataSp();
    });

    this.homeCaricoService.getSocietaObservable.subscribe(societa=>{
      this.societa = societa;
      this.loadDataSp();
    });

    //this.updateList();

  }

  loadDataSp(){
    this.homeCaricoSubcription = this.homeCaricoService.loadShpHomeCarico().subscribe
    ((resp: IspHomeCarico[])=>{
      this.list = resp;
      //this.listSp = this.list;
      
      this.isFilter = false;
      if(this.tipo != "-1"){
        this.list = this.list.filter(x => x.tipo == this.tipo);
        this.isFilter = true
      }

      if(this.provincia != "-1"){
        this.list = this.list.filter(x => x.prov == this.provincia);
        this.isFilter = true;
      }

      if(this.tecnicoZona != "-1"){
        this.list = this.list.filter(x => x.codTecnicoZona == this.tecnicoZona);
        this.isFilter = true;
      }

      if(this.societa != "-1"){
        this.list = this.list.filter(x => x.società == this.societa);
        this.isFilter = true;
      }

      if(this.pivacf != ""){
        this.list = this.list.filter(x => x.pivaCf.indexOf(this.pivacf) >= 0)
        this.isFilter = true;
      }

      if(this.codCliente != ""){
        this.list = this.list.filter(x => x.customer.indexOf(this.codCliente) >= 0)
        this.isFilter = true;
      }

      if(this.cliente != ""){
        this.list = this.list.filter(x => x.cliente.toLocaleUpperCase().indexOf(this.cliente.toLocaleUpperCase()) >= 0)
        this.isFilter = true;
      }

      if(this.cap != ""){
        this.list = this.list.filter(x => x.cap.indexOf(this.cap) >= 0)
        this.isFilter = true;
      }

      if(this.citta != ""){
        this.list = this.list.filter(x => x.citta.toLocaleUpperCase().indexOf(this.citta.toLocaleUpperCase()) >= 0)
        this.isFilter = true;
      }

      this.homeCaricoService.setSpHomeCaricoObservable = this.list;


      // if(this.isFilter){
      //   //this.reloadListSp(response);
      // }
  

   },
    error =>{
      console.log("Errore Vulnerabilities ",error.message);
    //this.shareService.alertUpdate("Errore caricamento lista IspHomeCarico  --> " + error.message, 20000);
    }
  );
  }
 
  changeSocieta(event: any){
    //console.log(event.value);
    this.homeCaricoService.setSocietaObservable = event.value;
  }

  changeTipo(event: any){
    this.homeCaricoService.setTipoObservable = event.value;
  }

  changeProvincia(event: any){
    this.homeCaricoService.setProvinciaObservable = event.value;
  }

  changeTecnicoZona(event: any){
    this.homeCaricoService.setTecnicoZonaObservable = event.value;
  }

}
