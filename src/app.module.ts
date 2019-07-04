import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot('mongodb://hello:hello12@ds247637.mlab.com:47637/nestjs-hello-world')
    ]
})
export class AppModule { }
