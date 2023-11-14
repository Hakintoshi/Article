import { Article } from './models/article.model';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: typeof Article);
    createArticle(dto: CreateArticleDTO): Promise<CreateArticleDTO>;
    getAllArticles(): Promise<Article[]>;
    getArticle(id: number): Promise<Article>;
    updateArticle(id: number, dto: UpdateArticleDTO): Promise<UpdateArticleDTO>;
    deleteArticle(id: number): Promise<void>;
}
