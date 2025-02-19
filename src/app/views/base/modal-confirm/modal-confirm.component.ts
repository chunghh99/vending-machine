import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {
  @Input() data: any = {};  // Nhận dữ liệu từ ModalService
  @Output() confirmed = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {}

  onConfirm() {
    this.confirmed.emit(true);
    this.activeModal.close('Confirmed');
  }

  onCancel() {
    this.confirmed.emit(false);
    this.activeModal.dismiss('Cancelled');
  }
}
