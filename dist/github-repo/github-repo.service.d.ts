import { HttpService } from "@nestjs/axios";
export declare class GithubRepoService {
    private readonly httpService;
    constructor(httpService: HttpService);
    create(repo_name: string, repo_desc: string, repo_lang: string, access_token: string): Promise<any>;
}
