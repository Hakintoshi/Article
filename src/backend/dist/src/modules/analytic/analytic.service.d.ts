import { ResponseDTO } from '@/dto/index';
import { article } from '@/models/article.model';
export declare class AnalyticService {
    private articleRepository;
    constructor(articleRepository: typeof article);
    private readonly logger;
    getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO>;
}
