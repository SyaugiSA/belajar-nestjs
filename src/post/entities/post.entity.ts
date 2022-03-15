import { UUID, DATE } from 'sequelize';
import {
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Comment } from 'src/post/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';

@Table
export class Post extends Model {
  @Column({ primaryKey: true, type: UUID })
  id: string;

  @Column
  tittle: string;

  @Column
  body: string;

  @Column({ type: DATE, defaultValue: new Date() })
  added: string;

  @ForeignKey(() => User)
  @Column({ type: UUID })
  added_by: string;

  @HasMany(() => Comment)
  comment: Comment[];
}
