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
exports.GithubRepoController = void 0;
const common_1 = require("@nestjs/common");
const github_repo_service_1 = require("./github-repo.service");
let GithubRepoController = class GithubRepoController {
    constructor(githubRepo) {
        this.githubRepo = githubRepo;
    }
    createRepo(qry, res) {
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
};
__decorate([
    (0, common_1.Get)('/create'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], GithubRepoController.prototype, "createRepo", null);
GithubRepoController = __decorate([
    (0, common_1.Controller)('github-repo'),
    __metadata("design:paramtypes", [github_repo_service_1.GithubRepoService])
], GithubRepoController);
exports.GithubRepoController = GithubRepoController;
//# sourceMappingURL=github-repo.controller.js.map