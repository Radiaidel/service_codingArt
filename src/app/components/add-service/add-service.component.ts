import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceManagementService } from '../../services/service.service';

@Component({
  selector: 'app-add-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  image: string | ArrayBuffer | null = null;

  service = {
    name: '',
    category: 'Maintenance',
    description: '',
    isActive: true,
    price: 0,
    tva: '20',
    image: ''
  };

  constructor(
    private serviceManagement: ServiceManagementService,
    private router: Router
  ) {}

  onSubmit() {
    this.serviceManagement.addService(this.service);
    this.router.navigate(['/services']);
  }

  cancel() {
    this.router.navigate(['/services']);
  }



  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = (e.target as FileReader).result;
        this.service.image = typeof this.image === 'string' ? this.image : ''
      };
      reader.readAsDataURL(file);
    }
  }
  
}