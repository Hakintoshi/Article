import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ArticleModule } from 'src/article/article.module';
import { Comment } from 'src/comment/models/comment.model';
import { Article } from 'src/article/models/article.model';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        dialect: 'postgres',
        host: 'localhost',
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        synchronize: true,
        autoLoadModels: true,
        models: [Article, Comment],
      }),
    }),
  ],
})
export class AppModule {}
