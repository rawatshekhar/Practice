import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  questions: any;

  constructor(@Inject(MAT_DIALOG_DATA) 
  public data:any
  ) {
    if(data){
      this.questions = data;
      console.log("local data questions",this.questions);
    }
   }

  ngOnInit(): void {
  }

}
