import { UUID } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { DATE } from 'sequelize';

@Table
export class Comment extends Model {
  @Column({ type: UUID, primaryKey: true })
  id: string;

  @Column
  body: string;

  @ForeignKey(() => User)
  @Column({ type: UUID })
  added_by: string;

  @ForeignKey(() => Post)
  @Column({ type: UUID })
  post: string;
}
