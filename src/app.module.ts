import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GithubOauthModule } from "./github-oauth/github-oauth.module";
import { GithubRepoModule } from "./github-repo/github-repo.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [GithubOauthModule, GithubRepoModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
