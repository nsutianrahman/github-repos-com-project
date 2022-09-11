import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { AxiosRequestConfig } from "axios";

@Injectable()
export class GithubOauthService {
  constructor(private httpService: HttpService) {}

  async getGithubToken(code: string): Promise<any> {
    const clientID = process.env.clientID;
    const clientSecret = process.env.clientSecret;
    const options: AxiosRequestConfig = {
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
      headers: {
        Accept: "application/json",
      },
    };
    return lastValueFrom(this.httpService.request(options));
  }
}
