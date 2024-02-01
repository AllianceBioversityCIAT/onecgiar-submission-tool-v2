import { PartialType } from '@nestjs/swagger';
import { CreateWorkPackageDetailDto } from './create-work-package-detail.dto';

export class UpdateWorkPackageDetailDto extends PartialType(CreateWorkPackageDetailDto) {}
