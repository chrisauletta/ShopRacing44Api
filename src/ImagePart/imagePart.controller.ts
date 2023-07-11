
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImagePartsService } from './imagePart.service';
import { ImagePart as ImagePartEntity} from './imagePart.entity';
import { BaseController } from '../base/base.controller';
import { join } from 'path';
import { Response } from 'express';

@Controller('imageParts')
@ApiTags('imageParts')
export class ImagePartsController extends BaseController<ImagePartEntity>{
    constructor(private readonly imagePartsServices: ImagePartsService){
        super(imagePartsServices);
    }

    @Post('update')
    async uploadImage(@Body() body) {
        return this.imagePartsServices.create(body);    
    }


    @Get('image/:nomeArquivo')
    async serveImagem(@Param('nomeArquivo') nomeArquivo: string, @Res() res: Response) {
      var filePath = nomeArquivo.split('_');
      var path = join(process.cwd(), 'upload/', filePath[0]+'/', filePath[1]);
      console.log(path);
      return res.sendFile(path);
    }
    // @Get()
    // @ApiOkResponse({type: [PartDto]})
    // findAll():Promise<PartDto[]>{
    //     return this.partsServices.findAll();
    // }

    // @Post()
    // @ApiCreatedResponse({ type: PartEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() budgetDto: PartCreateDto,
    // ): Promise<PartEntity> {
    //     return this.partsServices.create(budgetDto);
    // }
}
