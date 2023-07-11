import { Module } from '@nestjs/common';
import { ImagePartsController } from './imagePart.controller';
import { ImagePartsService } from './imagePart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImagePart } from './imagePart.entity';
import { imagePartsProviders } from './imagePart.providers';
@Module({
    imports:[SequelizeModule.forFeature([ImagePart])],
    controllers:[ImagePartsController],
    providers:[ImagePartsService, ...imagePartsProviders]
})

export class ImagePartsModule {}