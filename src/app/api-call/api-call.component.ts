import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from './products-service.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
})
export class ApiCallComponent implements OnInit {
  currentDate: Date = new Date();
  data: any[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchTerm: string = '';
  constructor(private service: ProductsServiceService) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe((res) => {
      this.data = res;
      sessionStorage.setItem('products', JSON.stringify(res));
    });
  }
//_______________Sorting Table_______________
  sortBy(property: string) {
    this.sortColumn = property;
    if (this.sortColumn === property) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    this.data.sort((a: any, b: any) => {
      const valueA = a[property];
      const valueB = b[property];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  //_______________Search products on Table_______________
  searchProducts() {
    if (this.searchTerm === '') {
      const originalData = sessionStorage.getItem('products');
      this.data = originalData ? JSON.parse(originalData) : [];
    } else {
      this.data = this.data.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        // item.category.toLowerCase().match(this.searchTerm.toLowerCase())
      );
    }
  }
  //_______________Pagination on Table_______________
  // Install npm i ngx-pagination
  p:any;
  
}
