import { Controller, Get, Query, Res } from '@nestjs/common';
import { GithubRepoService } from './github-repo.service';

@Controller('github-repo')
export class GithubRepoController {
  constructor(private readonly githubRepo: GithubRepoService) {}

  @Get('/create')
  createRepo(@Query() qry, @Res({ passthrough: true }) res): any {
    if (!qry.repo_name || !qry.repo_lang || !qry.token) {
      res.status(400);
      return 'Required parameters missing!!';
    }
    return this.githubRepo
      .create(qry.repo_name, qry.repo_desc || '', qry.repo_lang, qry.token)
      .then((el) => {
        return res.redirect(el.data.html_url);
      })
      .catch((err) => {
        return err.response.data;
      });
  }
}
