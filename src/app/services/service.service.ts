import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementService {
  private services: Service[] = [];
  private servicesSubject = new BehaviorSubject<Service[]>([]);

  constructor() {
    this.services = [
      { 
        id: 1, 
        name: 'S1', 
        category: 'cat1', 
        isActive: true, 
        price: 350.00,
        image: 'https://img.pikbest.com/png-images/qianku/cartoon-laptop-free_2065786.png!sw800'
      },
      { 
        id: 2, 
        name: 'S2', 
        category: 'cat2', 
        isActive: false, 
        price: 350.00,
        image: 'https://img.pikbest.com/png-images/qianku/cartoon-laptop-free_2065786.png!sw800'
      },
      { 
        id: 3, 
        name: 'S3', 
        category: 'cat3', 
        isActive: true, 
        price: 350.00,
        image: 'https://img.pikbest.com/png-images/qianku/cartoon-laptop-free_2065786.png!sw800'
      },
      { 
        id: 4, 
        name: 'S4', 
        category: 'cat4', 
        isActive: false, 
        price: 350.00,
        image: 'https://img.pikbest.com/png-images/qianku/cartoon-laptop-free_2065786.png!sw800'
      }
    ];
    this.servicesSubject.next(this.services);
  }

  getServices(): Observable<Service[]> {
    return this.servicesSubject.asObservable();
  }

  addService(service: Omit<Service, 'id'>): void {
    const newService = {
      ...service,
      id: this.services.length + 1
    };
    this.services.push(newService);
    this.servicesSubject.next(this.services);
  }

  deleteService(id: number): void {
    this.services = this.services.filter(service => service.id !== id);
    this.servicesSubject.next(this.services);
  }


  filterServices(category?: string, isActive?: boolean, searchTerm: string = ''): Service[] {
    return this.services.filter(service => {
      const categoryMatch = !category || service.category === category;
      const statusMatch = isActive === undefined || service.isActive === isActive;
      const searchMatch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && statusMatch && searchMatch;
    });
  }
}