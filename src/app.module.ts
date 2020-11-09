import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthenticationController } from './authentication/authentication.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
