import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../../services/spinner.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit {
  show: boolean = false;

  constructor(public spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.spinnerState.subscribe((state: boolean) => {
      this.show = state;
    });
  }

}
