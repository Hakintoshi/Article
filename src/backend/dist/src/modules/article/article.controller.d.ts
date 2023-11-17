import { ArticleService } from './article.service';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { ResponseDTO } from '@/dto/index';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    createArticles(dto: CreateArticleDTO): Promise<ResponseDTO>;
    findAllArticles(): Promise<ResponseDTO>;
    findOneArticle(id: number): Promise<ResponseDTO>;
    updateArticle(id: number, dto: UpdateArticleDTO): Promise<ResponseDTO>;
    deleteArticle(id: number): Promise<ResponseDTO>;
}
