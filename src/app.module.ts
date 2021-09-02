import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [ProductModule,
    MongooseModule.forRoot("mongodb://mongoadmin:Pass%23word1@localhost:27017/nest?authSource=admin&readPreference=primary&directConnection=true&ssl=false")],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
