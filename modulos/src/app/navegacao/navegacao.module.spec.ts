import { NavegacaoModule } from './navegacao.module';

describe('NavegacaoModule', () => {
  let navegacaoModule: NavegacaoModule;

  beforeEach(() => {
    navegacaoModule = new NavegacaoModule();
  });

  it('should create an instance', () => {
    expect(navegacaoModule).toBeTruthy();
  });
});
