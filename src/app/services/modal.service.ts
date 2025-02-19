import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {
  }

  // Phương thức mở modal
  open(component: any, data: any = {}) {
    const modalRef = this.modalService.open(component);
    modalRef.componentInstance.data = data; // Truyền dữ liệu vào component modal
    return modalRef;
  }

}
