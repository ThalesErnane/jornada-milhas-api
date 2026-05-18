import { ApiProperty } from '@nestjs/swagger';

export class QrCodeDto {
  @ApiProperty({
    description: 'Codigo Pix para copiar e colar no app de pagamento',
    example:
      '00020101021226830014br.gov.bcb.pix2554api.example.com/pix/txid123520400005303986540510.005802BR5913Jornada Milhas6009Sao Paulo62070503***6304ABCD',
  })
  codigo: string;

  @ApiProperty({
    description: 'Imagem do QR Code para pagamento',
    example: 'https://api.jornadamilhas.com/public/pagamento/qrcode.png',
  })
  imagem: string;
}
