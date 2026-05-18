import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { PagamentoService } from './pagamento.service';

describe('PagamentoService', () => {
  let service: PagamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagamentoService],
    }).compile();

    service = module.get<PagamentoService>(PagamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getQrCode', () => {
    it('deve retornar codigo e imagem preenchidos', () => {
      const qrCode = service.getQrCode();

      expect(qrCode.codigo).toBeTruthy();
      expect(qrCode.imagem).toBeTruthy();
      expect(qrCode.imagem).toContain(
        'https://api.qrserver.com/v1/create-qr-code/',
      );
    });

    it('deve gerar imagem usando o codigo Pix encodado', () => {
      const qrCode = service.getQrCode();
      const codigoEncodado = encodeURIComponent(qrCode.codigo);

      expect(qrCode.imagem).toContain(codigoEncodado);
    });
  });
});
