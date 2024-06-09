import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: any; // Tổng số mục
  @Input() currentPage: any; // Trang hiện tại
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>(); // Sự kiện khi thay đổi trang

  itemsPerPageOptions: number[] = [10, 20, 50]; // Các tùy chọn số mục trên mỗi trang
  itemsPerPage: number = this.itemsPerPageOptions[0]; // Số mục trên mỗi trang mặc định

  totalPages: any; // Tổng số trang
  visiblePages: any; // Mảng chứa số trang hiển thị


  constructor() {
  }

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges(): void {
    this.calculateTotalPages();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.updateVisiblePages();
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
    this.updateVisiblePages();
  }

  changeItemsPerPage(option: number): void {
    this.setCurrentPage(1);
    this.itemsPerPage = option;
    this.calculateTotalPages();
  }


  updateVisiblePages(): void {
    const visiblePageCount = 5; // Số lượng trang hiển thị
    const halfVisiblePageCount = Math.floor(visiblePageCount / 2);
    let startIndex = 0;
    let endIndex = 0;

    if (this.totalPages <= visiblePageCount) {
      startIndex = 1;
      endIndex = this.totalPages;
    } else if (this.currentPage <= halfVisiblePageCount) {
      startIndex = 1;
      endIndex = visiblePageCount;
    } else if (this.currentPage >= this.totalPages - halfVisiblePageCount) {
      startIndex = this.totalPages - visiblePageCount + 1;
      endIndex = this.totalPages;
    } else {
      startIndex = this.currentPage - halfVisiblePageCount;
      endIndex = this.currentPage + halfVisiblePageCount;
    }

    this.visiblePages = [];
    for (let i = startIndex; i <= endIndex; i++) {
      this.visiblePages.push(i);
    }
  }

}
