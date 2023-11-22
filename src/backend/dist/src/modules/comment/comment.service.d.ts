import { ArticleComment } from '@/models/comment.model';
import { CommentDTO } from './dto';
import { ResponseDTO } from '@/dto';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: typeof ArticleComment);
    private readonly logger;
    createComment(dto: CommentDTO): Promise<ResponseDTO>;
    getComments(id: number): Promise<ResponseDTO>;
    getComment(articleId: number, commentId: number): Promise<ResponseDTO>;
    deleteComment(articleId: number, commentId: number): Promise<ResponseDTO>;
}
