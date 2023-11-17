import { article } from '@/models/article.model';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { ResponseDTO } from '@/dto/index';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: typeof article);
    private readonly logger;
    createArticle(dto: CreateArticleDTO | UpdateArticleDTO, articleId?: number): Promise<ResponseDTO>;
    getAllArticles(): Promise<ResponseDTO>;
    getArticle(id: number): Promise<ResponseDTO>;
    deleteArticle(id: number): Promise<ResponseDTO>;
}
