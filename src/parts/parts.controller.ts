
import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PartsService } from './parts.service';
import { PartDto } from './dto/part.dto';
import { Part as PartEntity} from './part.entity';
import { PartCreateDto } from './dto/partCreate.dto';
import { BaseController } from '../base/base.controller';

@Controller('parts')
@ApiTags('parts')
export class PartsController extends BaseController<PartEntity>{
    constructor(private readonly partsServices: PartsService){
        super(partsServices);
    }

	@Post('findParts')
	@ApiResponse({ status: 200, description: 'Ok'})
	async findParts(
        @Body() body    
    ): Promise<PartEntity[]> {
		return this.partsServices.getAllPaginated(body)
	}

    // @Post()
    // @ApiCreatedResponse({ type: PartEntity })
    // @ApiBearerAuth()
    // create(
    //     @Body() budgetDto: PartCreateDto,
    // ): Promise<PartEntity> {
    //     return this.partsServices.create(budgetDto);
    // }
}
