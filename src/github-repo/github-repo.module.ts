import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubRepoController } from './github-repo.controller';
import { GithubRepoService } from './github-repo.service';

@Module({
  imports: [HttpModule],
  controllers: [GithubRepoController],
  providers: [GithubRepoService],
})
export class GithubRepoModule {}
