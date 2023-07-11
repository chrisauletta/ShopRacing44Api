import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Helper } from '../helper/helper';
import { Customer } from './customer.entity';
import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customerCreate.dto';
import { CustomerUpdateDto } from './dto/customerUpdate.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomersService extends BaseService<Customer> {
    constructor(
      @Inject('CustomersRepository')
       private readonly customersRepository: typeof Customer
    ){
      super(customersRepository);
    }
    async getByCpf(cpf: number) {
      return await Customer.findOne({
        where: {
          'document': cpf
        }
      });

  }
}


