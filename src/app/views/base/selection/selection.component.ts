import {Component} from '@angular/core';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule
  ],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {
  people: any[] = [{name: 'chunghh', gender:'male'}];
  selectedPeople = [];

  constructor() {
  }

  ngOnInit() {
  }
}
