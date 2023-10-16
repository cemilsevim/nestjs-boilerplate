import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/common/decorators/auth.user.decorator';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { IAuthUser } from 'src/modules/auth/interfaces/auth.interface';
import { UsersService } from 'src/modules/users/services/users.service';
import { GetProfileResponseDto } from '../dto/get.profile.response.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('profile')
export class ProfileController {
    constructor(private usersService: UsersService) {}

    @ApiOkResponse({ type: GetProfileResponseDto })
    @Get()
    getProfile(@AuthUser() authUser: IAuthUser): GetProfileResponseDto {
        return new GetProfileResponseDto(authUser.user);
    }
}
