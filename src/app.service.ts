import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCRUD(): string {
    // return this.getCRUD(isi);
    return 'membikin rest api crud';
  }
}
