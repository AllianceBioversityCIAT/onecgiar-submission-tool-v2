import { Injectable } from '@nestjs/common';
import { CreateMeliaDto } from './dto/create-melia.dto';
import { UpdateMeliaDto } from './dto/update-melia.dto';

@Injectable()
export class MeliaService {
  create(createMeliaDto: CreateMeliaDto) {
    return 'This action adds a new melia';
  }

  findAll() {
    return `This action returns all melia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} melia`;
  }

  update(id: number, updateMeliaDto: UpdateMeliaDto) {
    return `This action updates a #${id} melia`;
  }

  remove(id: number) {
    return `This action removes a #${id} melia`;
  }
}
