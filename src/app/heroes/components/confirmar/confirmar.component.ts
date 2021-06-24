import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {
  constructor(private dialogref:MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Heroe) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  borrar(){
    this.dialogref.close(true);
  }
  cerrar(){
    this.dialogref.close(false);
  }
}
