import { Article } from '@/models/article.model';
import { CreateArticleDTO } from './dto';
import { ResponseDTO } from '@/dto';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: typeof Article);
    private readonly logger;
    createArticle(dto: CreateArticleDTO): Promise<ResponseDTO>;
    getAllArticles(): Promise<ResponseDTO>;
    getArticle(id: number): Promise<ResponseDTO>;
    deleteArticle(id: number): Promise<ResponseDTO>;
}
