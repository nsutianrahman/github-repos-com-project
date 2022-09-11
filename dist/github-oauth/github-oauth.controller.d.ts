import { GithubOauthService } from "./github-oauth.service";
export declare class GithubOauthController {
    private githubOauthService;
    constructor(githubOauthService: GithubOauthService);
    handleGithubCallBack(query: any, res: any): Promise<any>;
}
