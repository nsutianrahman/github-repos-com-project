import { Controller, Get, Query, Res } from "@nestjs/common";
import { GithubOauthService } from "./github-oauth.service";

@Controller("github-oauth")
export class GithubOauthController {
  constructor(private githubOauthService: GithubOauthService) {}

  @Get()
  async handleGithubCallBack(
    @Query() query,
    @Res({ passthrough: true }) res
  ): Promise<any> {
    try {
      //checking some basic things
      const code = query.code;
      const path = query.path;
      if (!code) {
        res.status(400);
        return "User unauthorized";
      }
      if (!path) {
        res.status(400);
        return "DevError: There is no path attached to callback";
      }

      //Token request from github-service
      const github_token = await this.githubOauthService.getGithubToken(code);
      if (!github_token.data.access_token) {
        res.status(400);
        return github_token.data.error;
      }

      //Redirecting to new path where this token will be used.
      const url = new URL(path);
      delete query.path;
      delete query.code;
      const params = new URLSearchParams(query);
      params.append("token", github_token.data.access_token);
      return res.redirect(url.href + "?" + params.toString());
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
}
