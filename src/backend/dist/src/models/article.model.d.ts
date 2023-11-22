import { Model } from 'sequelize-typescript';
import { ArticleComment } from '@/models/comment.model';
export declare class Article extends Model {
    article_id: number;
    title: string;
    body: string;
    comments: ArticleComment[];
}
