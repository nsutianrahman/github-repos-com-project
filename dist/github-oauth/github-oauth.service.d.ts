import { HttpService } from "@nestjs/axios";
export declare class GithubOauthService {
    private httpService;
    constructor(httpService: HttpService);
    getGithubToken(code: string): Promise<any>;
}
