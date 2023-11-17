import { CommentService } from './comment.service';
export declare class AnalyticController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getAnalytic(dateFrom: number, dateTo: number): any;
}
