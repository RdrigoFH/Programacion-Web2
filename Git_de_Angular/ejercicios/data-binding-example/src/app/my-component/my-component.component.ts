import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {

  title: string = 'Hola, Mundo!';
  

  userInput: string = '';
}
