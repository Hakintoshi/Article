import { article_comment } from '../../models/comment.model';
import { ResponseDTO } from '@/dto/index';
export declare class AnalyticService {
    private commentRepository;
    constructor(commentRepository: typeof article_comment);
    private readonly logger;
    getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO>;
}
