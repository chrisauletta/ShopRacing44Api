import { Controller, Get, Post, Delete, Put, Body, Param, Query, Res, HttpException, UseGuards} from '@nestjs/common';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { User } from '../user/user.decorator';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { FilterDto } from '../helper/filter.dto';
import { BaseService } from './base.service'

export class BaseController<T>{

	constructor(private readonly IBaseService: BaseService<T>) {}

	@Get()
	@ApiResponse({ status: 200, description: 'Ok'})
	async findAll(): Promise<T[]> {
		return this.IBaseService.getAll()
	  
	}

	@Get('find')
	@ApiResponse({ status: 200, description: 'Ok'})
	@ApiResponse({ status: 404, description: 'Falha na busca'})
    findByParameter(@Query() query: FilterDto){
        return this.IBaseService.findByParameter(query);
    }

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Entity retrieved successfully.'})
	@ApiResponse({ status: 404, description: 'Entity does not exist'})
	async findById(@Param('id') id: number): Promise<T> {
	  return this.IBaseService.getByPk(id)
	}
	
	@Post()
	async create(@Body() entity: T): Promise<number> {
		return this.IBaseService.create(entity);
	}

	@ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	@ApiResponse({ status: 400, description: 'Bad Request.'})
	@Delete(':id')
	async delete(@Param('id') id: number) {
		return this.IBaseService.delete(id);
	}
	
	@Put()
	async update(@Body() entity: T): Promise<T> {
	  return this.IBaseService.update(entity);
	}

}