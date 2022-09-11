"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubRepoService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let GithubRepoService = class GithubRepoService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async create(repo_name, repo_desc, repo_lang, access_token) {
        const options = {
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
        return (0, rxjs_1.lastValueFrom)(this.httpService.request(options));
    }
};
GithubRepoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GithubRepoService);
exports.GithubRepoService = GithubRepoService;
//# sourceMappingURL=github-repo.service.js.map