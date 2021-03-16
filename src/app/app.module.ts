import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserService} from './services/user.service';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SheetComponent } from './sheet/sheet.component';
import { HandleExceptionComponent } from './handle-exception/handle-exception.component';
import { AdjustmentListsComponent } from './adjustment-lists/adjustment-lists.component';
import { AdjustmentApproveListsComponent } from './adjustment-approve-lists/adjustment-approve-lists.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatInputModule } from '@angular/material/input';
const appRoutes: Routes=[
  { path: 'posts',component:PostsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SheetComponent,
    HandleExceptionComponent,
    AdjustmentListsComponent,
    AdjustmentApproveListsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule, 
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ImageCropperModule,
    MatInputModule
                
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
