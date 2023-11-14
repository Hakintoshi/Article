import { Model } from 'sequelize-typescript';
import { Article } from '../../article/models/article.model';
export declare class Comment extends Model {
    comment_id: number;
    text: string;
    articleId: number;
    article: Article;
}
