import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { article_comment } from '@/models/comment.model';

@Table
export class article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  article_id: number;

  // Заголовок статьи
  @Column
  title: string;

  // Текст статьи
  @Column(DataType.TEXT)
  body: string;

  @HasMany(() => article_comment)
  comments: article_comment[];
}
