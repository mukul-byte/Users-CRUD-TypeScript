import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    this.userRepo.insert(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(id: string) {
    return this.userRepo.findOneBy({id:id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    this.userRepo.delete(id);
  }
}
