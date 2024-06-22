import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SelectionComponent} from "../../../../base/selection/selection.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-save-advertisement',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SelectionComponent,
    NgIf
  ],
  templateUrl: './save-advertisement.component.html',
  styleUrl: './save-advertisement.component.scss'
})
export class SaveAdvertisementComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const param = params['id'];
      console.log(params, param)
    });

    if(this.router.url.includes('/update/')){
      this.action = 'UPDATE';
    }

    this.formSave = this.fb.group({
      name: ['', [Validators.required]],
      fromDate: [''],
      toDate: [''],
      location: [''],
      deviceName: [''],
      locationDisplay: [''],
      block: [''],
      imageName: [''],
      image: [''],
      displayOrder: ['']
    })
  }


  onCreate() {

    console.log(this.formSave.value)

  }

  onUpdate() {

    console.log(this.formSave.value)

  }


}
