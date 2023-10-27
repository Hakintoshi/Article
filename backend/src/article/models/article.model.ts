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
export class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  article_id: number;

  @Column
  title: string;

  @Column(DataType.TEXT)
  body: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
