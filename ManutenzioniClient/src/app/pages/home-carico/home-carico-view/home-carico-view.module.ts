import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCaricoViewRoutingModule } from './home-carico-view-routing.module';
import { HomeCaricoViewComponent } from './home-carico-view.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeCaricoFilterModule } from "../home-carico-filter/home-carico-filter.module";
import { HomeCaricoListModule } from '../home-carico-list/home-carico-list.module';
import { HomeCaricoHeadModule } from '../home-carico-head/home-carico-head.module';

//import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        HomeCaricoViewComponent
    ],
    imports: [
        CommonModule,
        HomeCaricoViewRoutingModule,
        ReactiveFormsModule,
        HomeCaricoFilterModule,
        HomeCaricoListModule,
        HomeCaricoHeadModule
        // MatToolbarModule,
        // MatCardModule,
        // MatFormFieldModule,
        // MatSelectModule,
        // MatInputModule,
        // MatPaginatorModule,
        // MatTableModule,
        // MatSortModule,
        // MatButtonModule,
        // MatProgressBarModule,
        // MatSnackBarModule,
        // MatDialogModule,
        // MatCheckboxModule,
        // MatIconModule,
    ]
})
export class HomeCaricoViewModule { }
