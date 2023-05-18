import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IspHomeCarico } from 'src/app/interfaces/IsPHomeCarico';

@Injectable({
  providedIn: 'root'
})
export class HomeCaricoService {

  private base_url :string = "https://localhost:7279/api/v1";
  //private base_url :string = "https://lasonda.sopranciodue.it:444/api/v1";

  private _spHomeCaricoBehaviori$: BehaviorSubject<IspHomeCarico[]> = new BehaviorSubject<IspHomeCarico[]>([]);
//filtro
  private _societaBehavior$: BehaviorSubject<string> = new BehaviorSubject<string>("-1");
  private _tipoBehavior$: BehaviorSubject<string> = new BehaviorSubject<string>("-1");
  private _provinciaBehavior$: BehaviorSubject<string> = new BehaviorSubject<string>("-1");
  private _tecnicoZonaBahavior$: BehaviorSubject<string> = new BehaviorSubject<string>("-1");


  //fine filtro

  constructor(private httpClient: HttpClient) { }
//propertySocieta
get getSocietaObservable(){
  return this._societaBehavior$.asObservable();
}

set setSocietaObservable(societa: string){
  this._societaBehavior$.next(societa);
}

// property tipo
get getTipoObservable(){
  return this._tipoBehavior$.asObservable();
}

set setTipoObservable(tipo: string){
  this._tipoBehavior$.next(tipo);
}
//property Provincia

get getProvinciaObservable(){
  return this._provinciaBehavior$.asObservable();
}

set setProvinciaObservable(provincia: string){
  this._provinciaBehavior$.next(provincia);
}

//property tecnico zona

get getTecnicoZonaObservable(){
  return this._tecnicoZonaBahavior$.asObservable();
}

set setTecnicoZonaObservable(tecnicoZona: string){
  this._tecnicoZonaBahavior$.next(tecnicoZona);
}

//...................carica data
  get getSpCoursesObservable(){
    return this._spHomeCaricoBehaviori$.asObservable();
  }

  set setSpHomeCaricoObservable(spCourses: IspHomeCarico[]){
    this._spHomeCaricoBehaviori$.next(spCourses);
  }

  refreshSpHomeCaricoObsrvable(){
    this.httpClient.get<IspHomeCarico[]>(this.base_url + "/HomeCaricoGlauco/listHomeCarico").subscribe(spHomeCarico =>{
      console.log("refreshSpHomeCaricoObsrvable",spHomeCarico);
      //if(!this.shareService.ExistsListBehaviorSubject(spHomeCarico, this._spHomeCaricoBehaviori$)){
        this._spHomeCaricoBehaviori$.next(spHomeCarico);
      //}
    });
  }

  loadShpHomeCarico(){
    return this.httpClient.get<IspHomeCarico[]>(this.base_url + "/HomeCaricoGlauco/listHomeCarico");
  }



//...........Fine carica data

}
