import { GithubRepoService } from './github-repo.service';
export declare class GithubRepoController {
    private readonly githubRepo;
    constructor(githubRepo: GithubRepoService);
    createRepo(qry: any, res: any): any;
}
