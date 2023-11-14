import { Model } from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';
export declare class Article extends Model {
    article_id: number;
    title: string;
    body: string;
    comments: Comment[];
}
