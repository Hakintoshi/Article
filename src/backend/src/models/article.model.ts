import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ArticleComment } from '@/models/comment.model';

@Table({ tableName: 'article' })
export class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  article_id: number;

  @Column({
    type: DataType.STRING,
    comment: 'Заголовок статьи',
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    comment: 'Текст статьи',
  })
  body: string;

  @HasMany(() => ArticleComment)
  comments: ArticleComment[];
}
