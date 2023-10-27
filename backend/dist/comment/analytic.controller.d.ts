import { CommentService } from './comment.service';
export declare class AnalyticController {
    private readonly CommentService;
    constructor(CommentService: CommentService);
    getAnalytic(dateFrom: number, dateTo: number): Promise<import("./models/comment.model").Comment[]>;
}
