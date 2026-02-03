import { Injectable } from '@angular/core';
import { SERVICES } from '../mocks/services.mock';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  getServices(): Service[] {
    return SERVICES;
  }

  getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find((service) => service.slug === slug);
  }
}
