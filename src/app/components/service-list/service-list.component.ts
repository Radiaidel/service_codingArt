import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceManagementService } from '../../services/service.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {
  filteredServices: Service[] = [];
  selectedCategory: string = '';
  selectedStatus: boolean | undefined;
  serviceToDelete: Service | null = null;
  showCategoryDropdown = false;
  showStatusDropdown = false;
  activeActionMenu: number | null = null;
  searchTerm = '';

  constructor(private serviceManagement: ServiceManagementService) { }

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredServices = this.serviceManagement.filterServices(
      this.selectedCategory || undefined,
      this.selectedStatus,
      this.searchTerm
    );
  }

  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showStatusDropdown = false;
    this.activeActionMenu = null;
  }

  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showCategoryDropdown = false;
    this.activeActionMenu = null;
  }

  toggleActionMenu(serviceId: number) {
    this.activeActionMenu = this.activeActionMenu === serviceId ? null : serviceId;
    this.showCategoryDropdown = false;
    this.showStatusDropdown = false;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.showCategoryDropdown = false;
    this.applyFilters();
  }

  selectStatus(status: boolean | undefined) {
    this.selectedStatus = status;
    this.showStatusDropdown = false;
    this.applyFilters();
  }

}