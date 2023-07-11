import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ImagePart } from './imagePart.entity';
import { writeFile } from 'fs';
import { Helper } from '../helper/helper';
const fs = require('fs');

@Injectable()
export class ImagePartsService extends BaseService<ImagePart>{
    constructor(
        @Inject('ImagePartsRepository')
        private readonly imagePartsRepository: typeof ImagePart,
    ){
        super(imagePartsRepository);
    }

    async create(entity: any){
        var ext = entity.ext;
        if(ext == "jpg" || ext == "JPG"){
            ext = "jpeg";
        }
        const imageData = Buffer.from(entity.image, 'base64');
        var fileName = Helper.customFilename(ext);
        var folderPath = 'upload/'+entity.customerId+'/';
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log('Pasta criada com sucesso.');
        }
        writeFile(folderPath+fileName, imageData, (err) => {
        if (err) {
            console.log('Erro ao salvar a imagem:'+ err);
        }else{
            console.log('Imagem salva');
        }
        });
        var imageStore = {
            image: fileName,
            partId: entity.partId,
            main: entity.main,
            usuincDt: new Date()
        }
        return await ImagePart.create(imageStore);
        // return Company.findByPk(entity.id);

    }
}

