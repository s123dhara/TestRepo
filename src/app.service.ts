import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from './sample.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Sample)
    private sampleRepository: Repository<Sample>,
  ) { }


  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<any> {
    // return await this.sampleRepository.find();
    try {
      const data = this.sampleRepository.create({
        id: 1,
        name: "supriyo"
      })
  
      const savedaata = await this.sampleRepository.save(data);
  
      return {
        status: true,
        message: "done"
      };
    } catch (error) {
      console.log(error.message)
    }

  }
}
