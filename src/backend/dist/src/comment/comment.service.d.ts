import { Comment } from './models/comment.model';
import { CommentDTO } from './dto';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: typeof Comment);
    createComment(dto: CommentDTO, id: number): Promise<CommentDTO>;
    getComments(id: number): Promise<Comment[]>;
    getComment(articleId: number, commentId: number): Promise<Comment>;
    updateComment(articleId: number, commentId: number, dto: CommentDTO): Promise<CommentDTO>;
    deleteComment(articleId: number, commentId: number): Promise<void>;
    getAnalytic(dateFrom: number, dateTo: number): Promise<Comment[]>;
}
