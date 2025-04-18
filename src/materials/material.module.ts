import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MaterialComponents=[MatTooltipModule,MatSnackBarModule,MatStepperModule,BrowserAnimationsModule,MatCardModule,MatPaginatorModule,MatDialogModule,MatToolbarModule,MatIconModule,MatButtonModule,MatDividerModule,MatTableModule,MatSidenavModule,MatSelectModule,MatProgressSpinnerModule]


@NgModule({
    imports:[MaterialComponents],
    exports:[MaterialComponents]
})
export class MaterialModule{}