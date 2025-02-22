import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementService {
  private services: Service[] = [];
  private servicesSubject = new BehaviorSubject<Service[]>([]);

  addService(service: Omit<Service, 'id'>): void {
    const newService = {
      ...service,
      id: this.services.length + 1
    };
    this.services.push(newService);
    this.servicesSubject.next(this.services);
  }
}