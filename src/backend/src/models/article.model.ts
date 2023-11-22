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
// исправить наименование таблиц
export class article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  article_id: number;

  // Заголовок статьи
  // Добавить комментарий
  // @Column({
  //   type: DataType.STRING,
  //   comment: 'Текст комментария',
  // })
  @Column
  title: string;

  // Текст статьи
  @Column(DataType.TEXT)
  body: string;

  @HasMany(() => article_comment)
  comments: article_comment[];
}
