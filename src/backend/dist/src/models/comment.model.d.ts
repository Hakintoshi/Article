import { Model } from 'sequelize-typescript';
import { Article } from '@/models/article.model';
export declare class ArticleComment extends Model {
    comment_id: number;
    text: string;
    articleId: number;
    article: Article;
}
