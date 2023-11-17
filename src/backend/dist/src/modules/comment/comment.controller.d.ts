import { CommentService } from './comment.service';
import { CommentDTO } from './dto';
import { ResponseDTO } from '@/dto/index';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(articleId: number, dto: CommentDTO): Promise<ResponseDTO>;
    getComments(id: number): Promise<ResponseDTO>;
    getComment(commentId: number, articleId: number): Promise<ResponseDTO>;
    updateComment(commentId: number, articleId: number, dto: CommentDTO): Promise<ResponseDTO>;
    deleteComment(commentId: number, articleId: number): Promise<ResponseDTO>;
}
