import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { BlogDTO } from './dto/blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  // async showAll() {
  //   return await this.blogRepository.find();
  // }

  async create(data: BlogDTO) {
    const blog = this.blogRepository.create(data);
    await this.blogRepository.save(data);
    return blog;
  }

  async findAll() {
    return await this.blogRepository.find();
  }

  async findOne(id: number) {
    await this.blogRepository.findOne({
      where: {
        id: id,
      },
    });
    return `This action returns a #${id} blog`;
  }

  async update(id: number, data: Partial<BlogDTO>) {
    await this.blogRepository.update({ id }, data);
  }

  // async destroy(id: number) {
  //   await this.blogRepository.delete({ id });
  //   return { deleted: true };
  // }

  async remove(id: number) {
    await this.blogRepository.delete({ id });
    return { deleted: true };
  }
}
