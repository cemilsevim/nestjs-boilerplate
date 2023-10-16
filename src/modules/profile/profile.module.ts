import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { ProfileService } from './services/profile.service';
import { ProfileController } from './controllers/profile.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [UsersModule, AuthModule],
    providers: [ProfileService],
    controllers: [ProfileController],
})
export class ProfileModule {}
