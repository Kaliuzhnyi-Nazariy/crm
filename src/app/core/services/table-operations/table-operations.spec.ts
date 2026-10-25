import { TestBed } from '@angular/core/testing';
import { TableOperationsService } from './table-operations';

describe('TableOperations', () => {
  let service: TableOperationsService<{ id: string }>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
