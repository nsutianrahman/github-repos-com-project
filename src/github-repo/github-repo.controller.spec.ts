import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepoController } from './github-repo.controller';

describe('GithubRepoController', () => {
  let controller: GithubRepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubRepoController],
    }).compile();

    controller = module.get<GithubRepoController>(GithubRepoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
