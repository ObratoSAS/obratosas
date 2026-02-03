import { Injectable } from '@angular/core';
import { CASES } from '../mocks/cases.mock';
import { CaseStudy } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {
  getCases(): CaseStudy[] {
    return CASES;
  }

  getCaseById(id: number): CaseStudy | undefined {
    return CASES.find((item) => item.id === id);
  }
}
