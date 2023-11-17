import { Model } from 'sequelize-typescript';
import { article } from '@/models/article.model';
export declare class article_comment extends Model {
    comment_id: number;
    text: string;
    articleId: number;
    article: article;
}
