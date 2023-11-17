import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { article } from '@/models/article.model';

@Table
// Поправить аналагично модели в ARTICLES
export class article_comment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  comment_id: number;

  // Текст комментария
  @Column
  text: string;

  @ForeignKey(() => article)
  @Column
  articleId: number;

  @BelongsTo(() => article)
  article: article;
}
