import { Test, TestingModule } from '@nestjs/testing';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';
import { ProblemMock } from './mocks/problem.mock';

describe('ProblemController', () => {
  let controller: ProblemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemController],
      providers: [
        {
          provide: ProblemService,
          useValue: ProblemMock.mockProblemService([]),
        },
      ],
    }).compile();

    controller = module.get<ProblemController>(ProblemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
