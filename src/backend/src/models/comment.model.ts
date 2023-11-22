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
import { Article } from '@/models/article.model';

@Table({ tableName: 'article_comment' })
export class ArticleComment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  comment_id: number;

  @Column({
    type: DataType.STRING,
    comment: 'Тексе комментария',
  })
  text: string;

  @ForeignKey(() => Article)
  @Column({
    comment: 'Ссылка на article',
  })
  articleId: number;

  @BelongsTo(() => Article)
  article: Article;
}
