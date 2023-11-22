import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto';
import { ResponseDTO } from '@/dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    createArticles(dto: CreateArticleDTO): Promise<ResponseDTO>;
    getArticles(): Promise<ResponseDTO>;
    getArticle(id: number): Promise<ResponseDTO>;
    updateArticle(id: number, dto: CreateArticleDTO): Promise<ResponseDTO>;
    deleteArticle(id: number): Promise<ResponseDTO>;
}
