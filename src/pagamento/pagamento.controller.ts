import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { QrCodeDto } from './dto/qr-code.dto';
import { PagamentoService } from './pagamento.service';

@ApiTags('Pagamento')
@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Get('qrcode')
  @ApiOperation({ summary: 'Retorna os dados do QR Code para pagamento Pix' })
  @ApiOkResponse({ type: QrCodeDto })
  getQrCode(): QrCodeDto {
    return this.pagamentoService.getQrCode();
  }
}
