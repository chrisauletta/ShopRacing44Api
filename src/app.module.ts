import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filter/exception.filter';
import { AuthModule } from './auth/auth.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { produtoModule } from './produto/produto.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { userModule } from './user/user.module';
import { PartsModule } from './parts/parts.module';
import { HelperInterceptor } from './helper.interceptor';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';
import { CustomersModule } from './customer/customers.module';
import { ImagePartsModule } from './ImagePart/imagePart.module';
import { AdressModule } from './adress/adress.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      host: 'mysql26-farm10.kinghost.net',
      port: 3306,
      username: 'autounity02',
      password: 'shopracing44',
      database: 'autounity02',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'show_racing_44',
      dialect:'mysql',
      synchronize:true,
      autoLoadModels: true,
      define: {
        timestamps: false
      },
      // sync:{
      //   force:true
      // }
    }),
    ImagePartsModule,
     PartsModule,
     CustomersModule,
     AdressModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    HelperInterceptor,
    //  {
    //  provide: APP_INTERCEPTOR,
    //  useClass: ClassSerializerInterceptor
    // }
  ],
})
export class AppModule { }
