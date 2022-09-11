import { Module } from '@nestjs/common';
import { GithubOauthService } from './github-oauth.service';
import { GithubOauthController } from './github-oauth.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GithubOauthService],
  controllers: [GithubOauthController],
})
export class GithubOauthModule {}
