import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
    connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        username: 'Admin',
        firstName: 'Admin',
        lastName: 'Admin',
        password: 'password',
      })
      .execute()
      .then((r) => console.log('Add admin user for testing', r));
  }
}
