import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { userModule } from './../user/user.module';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './shared/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';


@Module({
    imports: [userModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '6000s' },
          }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
