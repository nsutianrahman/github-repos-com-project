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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubOauthController = void 0;
const common_1 = require("@nestjs/common");
const github_oauth_service_1 = require("./github-oauth.service");
let GithubOauthController = class GithubOauthController {
    constructor(githubOauthService) {
        this.githubOauthService = githubOauthService;
    }
    async handleGithubCallBack(query, res) {
        try {
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
            const github_token = await this.githubOauthService.getGithubToken(code);
            if (!github_token.data.access_token) {
                res.status(400);
                return github_token.data.error;
            }
            const url = new URL(path);
            delete query.path;
            delete query.code;
            const params = new URLSearchParams(query);
            params.append("token", github_token.data.access_token);
            return res.redirect(url.href + "?" + params.toString());
        }
        catch (err) {
            console.log(err);
            return err.response.data;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GithubOauthController.prototype, "handleGithubCallBack", null);
GithubOauthController = __decorate([
    (0, common_1.Controller)("github-oauth"),
    __metadata("design:paramtypes", [github_oauth_service_1.GithubOauthService])
], GithubOauthController);
exports.GithubOauthController = GithubOauthController;
//# sourceMappingURL=github-oauth.controller.js.map