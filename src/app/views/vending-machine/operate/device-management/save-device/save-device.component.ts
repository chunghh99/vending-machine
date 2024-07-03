import {Component, OnInit} from '@angular/core';
import {SelectionComponent} from "../../../../base/selection/selection.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-save-device',
  standalone: true,
  imports: [
    SelectionComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './save-device.component.html',
  styleUrl: './save-device.component.scss'
})
export class SaveDeviceComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const param = params['id'];
      console.log(params, param)
    });

    this.formSave = this.fb.group({
      deviceName: [''],
      place: [''],
      slotSingle: [''],
      slotSingleMax: [''],
      slotDouble: [''],
      slotDoubleMax: [''],
      pttt: [''],
      slot1: [''],
      slot2: [''],
      slotN: [''],
    });


    if (this.router.url.includes('/update/')) {
      this.action = 'UPDATE';
    }
  }


  onCreate() {

  }

  onUpdate() {

  }

  onCopy() {

  }


  validField(field: string): boolean {
    const control = this.formSave.get(field)
    return control.invalid && (control.dirty || control.touched)
  }

  showError(controlName: any, errorName: any) {
    const control = this.formSave.get(controlName);
    return control.hasError(errorName) && control.touched;
  }
}
