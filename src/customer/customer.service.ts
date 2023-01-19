import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from 'src/schemas/customer.schema';
import { CreateCustomerDto } from "./dto/customer.dto"

// @Injectable()
// export class CustomerService {
//     constructor(@InjectModel(Customer.name) private customerModel: Model:<CustomerDocument>) {}


// }

@Injectable()
export class CustomerService {
    constructor(@InjectModel(Customer.name) private customerModel:Model<CustomerDocument>){}

    async create(createCustomerDto:any):Promise<Customer> {
        const createdCustomer = new this.customerModel(createCustomerDto);
        return createdCustomer.save();
    }
}
