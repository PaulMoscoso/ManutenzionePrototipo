import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IspHomeCarico } from 'src/app/interfaces/IsPHomeCarico';
import { HomeCaricoService } from 'src/app/services/home-carico/home-carico.service';

@Component({
  selector: 'app-home-carico-head',
  templateUrl: './home-carico-head.component.html',
  styleUrls: ['./home-carico-head.component.scss']
})
export class HomeCaricoHeadComponent {
  homeCarichi: IspHomeCarico[] = [];
  selection = new SelectionModel<IspHomeCarico>(true, []);

  @Output() eventAssegna = new EventEmitter<string>();

  constructor(private homeCaricoService: HomeCaricoService,private _snackBar: MatSnackBar){

  }





  assegna(){
    console.log("assegna","click")
    this.eventAssegna.emit("click");


    // let selectRows = this.homeCarichi.filter(row => this.selection.isSelected(row));
    // console.log("assegna",selectRows);
    // if(selectRows.length > 0){
    //   this.homeCarichi = this.homeCarichi.filter(row => !this.selection.isSelected(row))
    //   this.homeCaricoService.setSpHomeCaricoObservable = this.homeCarichi;
    //   this.homeCaricoService.getSpCoursesObservable.subscribe(resp =>{
    //     this.alertUpdate("Assegnazione effettuata con successo!", 3000);
    //   });
      
    //   return;
    // }
    // this.alertUpdate("Nessuna riga selezionata!", 3000);
  }

   alertUpdate(messagge: string, duration: number){
    this._snackBar.open(messagge,"",{
      duration,
      horizontalPosition:"center",
      verticalPosition: "bottom"
    });
  }
}
