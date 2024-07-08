import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  title: string = 'Ejemplo de data Blinding de clases teorica!';
    
  userInput: string = '';
}
