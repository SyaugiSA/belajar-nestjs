import { UUID, DATE } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Comment } from 'src/post/entities/comment.entity';
import { Post } from 'src/post/entities/post.entity';

@Table
export class User extends Model {
  @Column({ primaryKey: true, type: UUID })
  id: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column({ type: DATE, defaultValue: new Date() })
  emailVerification: string;

  @Column
  password: string;

  @HasMany(() => Post)
  post: Post[];

  @HasMany(() => Comment)
  comment: Comment[];
}
