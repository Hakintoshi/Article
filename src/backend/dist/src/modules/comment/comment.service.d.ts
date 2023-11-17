import { article_comment } from '../../models/comment.model';
import { CommentDTO } from './dto';
import { ResponseDTO } from '@/dto/index';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: typeof article_comment);
    private readonly logger;
    createComment(dto: CommentDTO, articleId: number, commentId?: number): Promise<ResponseDTO>;
    getComments(id: number): Promise<ResponseDTO>;
    getComment(articleId: number, commentId: number): Promise<ResponseDTO>;
    deleteComment(articleId: number, commentId: number): Promise<ResponseDTO>;
}
