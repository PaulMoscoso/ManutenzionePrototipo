import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _nameAccountBehavior$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>("");
  constructor() { }

  get getNameAccountObservable(){
    return this._nameAccountBehavior$.asObservable();
  }
  
  set setNameAccountObservable(name: string | undefined){
    this._nameAccountBehavior$.next(name);
  }
}
