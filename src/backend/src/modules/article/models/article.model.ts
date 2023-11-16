import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';

@Table
// Поменять название таблицы, пользуясю правилом snake_case
export class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  article_id: number;

  // добавить комментарий для полей, то что они означают.
  @Column
  title: string;

  @Column(DataType.TEXT)
  body: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
