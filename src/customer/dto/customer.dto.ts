import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../customer.entity';

export class CustomerDto {

    @ApiProperty()
    readonly name:string;

    @ApiProperty()
    readonly document:string;

    @ApiProperty()
    readonly telephone:string;

    @ApiProperty()
    readonly cell:string;

    @ApiProperty()
    readonly email:string;

    @ApiProperty()
    readonly city:string;

    @ApiProperty()
    readonly state:string;

    @ApiProperty()
    readonly note:string;


    constructor(customer: Customer) {
        this.name = customer.name;
        this.document = customer.document;
        this.telephone = customer.telephone;
        this.cell = customer.cell;
        this.email = customer.email;
        this.city = customer.city;
        this.state = customer.state;
        this.note = customer.note;
    }
}













