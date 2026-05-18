import { Injectable } from '@nestjs/common';
import { QrCodeDto } from './dto/qr-code.dto';

@Injectable()
export class PagamentoService {
  private readonly codigoPix =
    '00020101021226830014br.gov.bcb.pix2554api.example.com/pix/txid123520400005303986540510.005802BR5913Jornada Milhas6009Sao Paulo62070503***6304ABCD';

  private readonly baseQrCodeUrl =
    'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=';

  getQrCode(): QrCodeDto {
    const codigo = this.codigoPix;

    return {
      codigo,
      imagem: `${this.baseQrCodeUrl}${encodeURIComponent(codigo)}`,
    };
  }
}
