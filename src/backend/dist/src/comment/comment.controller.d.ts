import { CommentService } from './comment.service';
import { CommentDTO } from './dto';
import { Comment } from './models/comment.model';
export declare class CommentController {
    private readonly CommentService;
    constructor(CommentService: CommentService);
    createComment(id: number, dto: CommentDTO): Promise<CommentDTO>;
    getComments(id: number): Promise<Comment[]>;
    getComment(commentId: number, articleId: number): Promise<Comment>;
    updateComment(commentId: number, articleId: number, dto: CommentDTO): Promise<CommentDTO>;
    deleteComment(commentId: number, articleId: number): Promise<void>;
}
