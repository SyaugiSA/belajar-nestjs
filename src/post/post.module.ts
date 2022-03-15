import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Post, Comment])],
  controllers: [PostController],
  providers: [PostService],
  exports: [SequelizeModule],
})
export class PostModule {}
