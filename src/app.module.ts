import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user/user.entity';
import { UsersModule } from './entities/user/user.module';
import { PostModule } from './entities/post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './config/mongo/mongo-config.service';

const database: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'cms_db',
  schema: 'cms_schema',
  entities: [User],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => database }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    UsersModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
