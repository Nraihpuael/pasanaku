import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentaDto } from './create-cuenta.dto';

export class UpdateCuentaDto extends PartialType(CreateCuentaDto) {

    readonly nro?: string;
    readonly departamento?: string;
}
