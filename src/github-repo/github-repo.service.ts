import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from "axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

@Injectable()
export class GithubRepoService {
  constructor(private readonly httpService: HttpService) {}

  async create(
    repo_name: string,
    repo_desc: string,
    repo_lang: string,
    access_token: string
  ): Promise<any> {
    const options: AxiosRequestConfig = {
      method: "post",
      url: `https://api.github.com/repos/nsutianrahman/${repo_lang}/generate`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        name: repo_name,
        description: repo_desc,
      },
    };
    return lastValueFrom(this.httpService.request(options));
  }
}
