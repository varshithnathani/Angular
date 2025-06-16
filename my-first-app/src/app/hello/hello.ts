import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  myName = "VARSHITH NATHANI";
  message ='';
  showMessage() {
    this.message='you clicked the button!';
  }
}