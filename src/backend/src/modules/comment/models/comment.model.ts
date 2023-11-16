import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Article } from '../../article/models/article.model';

@Table
// Поправить аналагично модели в ARTICLES
export class Comment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  comment_id: number;

  @Column
  text: string;

  @ForeignKey(() => Article)
  @Column
  articleId: number;

  @BelongsTo(() => Article)
  article: Article;
}
