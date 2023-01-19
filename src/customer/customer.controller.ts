import { CreateCustomerDto } from './dto/customer.dto';
import { CustomerService } from './customer.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post("create")
    createCustomer(@Body()CreateCustomerDto:CreateCustomerDto){
        return this.customerService.create(CreateCustomerDto)
    }
}
