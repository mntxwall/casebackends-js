import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sample: number = 1
  getHello() {
  /*  setTimeout(() => {
      console.log('Hello World!');
    }, 10000)*/
    console.log(this.sample)

  }

  setHello(){
    this.sample += 1
  }


}
