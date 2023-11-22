import { ResponseDTO } from '@/dto';
import { Article } from '@/models/article.model';
export declare class AnalyticService {
    private articleRepository;
    constructor(articleRepository: typeof Article);
    private readonly logger;
    getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO>;
}
