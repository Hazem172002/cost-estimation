import { Test, TestingModule } from '@nestjs/testing';
import { FunctionalityService } from './functionality.service';

describe('FunctionalityService', () => {
  let service: FunctionalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionalityService],
    }).compile();

    service = module.get<FunctionalityService>(FunctionalityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
