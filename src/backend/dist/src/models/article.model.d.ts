import { Model } from 'sequelize-typescript';
import { article_comment } from '@/models/comment.model';
export declare class article extends Model {
    article_id: number;
    title: string;
    body: string;
    comments: article_comment[];
}
