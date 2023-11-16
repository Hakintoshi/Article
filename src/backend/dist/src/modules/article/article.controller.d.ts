import { ArticleService } from './article.service';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { Article } from './models/article.model';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    createArticles(dto: CreateArticleDTO): Promise<CreateArticleDTO>;
    findAllArticles(): Promise<Article[]>;
    findOneArticle(id: number): Promise<Article>;
    updateArticle(id: number, dto: UpdateArticleDTO): Promise<UpdateArticleDTO>;
    deleteArticle(id: number): Promise<void>;
}
