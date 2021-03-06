# Primeiros passos

* Criar projeto
* Criar componente
* Aplicar bootstrap

## Criando primeiro projeto angular

No repositório desejado execute `ng new teste` para criar um projeto angular chamado teste

## Executando o projeto no servidor local

Execute `ng serve` para subir a aplicação. 
Para acessar a aplicação abra o endereço `http://localhost:4200/` no navegador.

![01](https://user-images.githubusercontent.com/23413093/44950806-0031f900-ae28-11e8-8140-5db56d82c917.png)
*Aplicação em execução*

## Criando novo componente

Para criar um novo componente execute `ng generate component novo-componente` ou `ng g c novo-componente`.

Para desabilitar a criação do arquivo spec.ts ao gerar um novo componente execute `ng g c novo-componente --spec=false`.

## Aplicando bootstrap

Para aplicar o Bootstrap da versão mais recente execute `npm install bootstrap --save` ou `npm i bootstrap --save`.

*O `--save` já aplica o Bootstrap no package.json*.

## Interpolações

A interpolação `{{}}` permite que o template acesse algum dado disponível do componente.
É possível chamar variáveis, métodos e realizar operações matemáticas do typescript.

### Template
```html
<h2>
  Nome: {{nome}}
</h2>
<h3>
  Idade: {{getIdade()}}
</h3>
<h3>
  Soma 1+1 = {{1+1}}
</h3>
```

### Componente controlador
```typescript
//...
export class NovoComponenteComponent{
  nome = 'Jack Bauer';
  idade = 35;

  getIdade() {
    return this.idade;
  }
//...
```
### Visualização
![02](https://user-images.githubusercontent.com/23413093/44951998-d7baf680-ae49-11e8-96db-c25946f4c5bf.png)

## Usando Event Binding

Um event binding `(click)="chamaMetodo()"` captura uma ação realizada no template para que ocorra alguma ação partindo do componente, neste caso o componente ouviu do template um click e executou um método.

Outra forma (menos usada) de representar um event binding `on-click="chamaMetodo()"`.

## Usando Variável de Referência

Uma váriável de referência `#nomeDaVariavel` captura uma referência do próprio elemento localizado no template e seu escopo é de template.

### Exemplo:

- Criamos um input, e definimos uma variável de referência para ele `#valorInput`.
```html
  <input type="text" #valorInput>
```

- No botão vamos criar um binding de click e chamar o método `cadastrarDespesa()`, nesse método passaremos como parâmetro a variável definida no input `valorInput.value` para que o componente receba o valor digitado no input.
```html
  <button type="button" (click)="cadastrarDespesa(valorInput.value)">Cadastrar</button>
```

- O componente recebe o valor do input e atualiza a variável `valor`
```typescript
//...
export class EventBindingComponent {
  valor = 0;

  cadastrarDespesa(valor: number) {
    this.valor = valor;
  }
//...
```
#### Visualização
![03](https://user-images.githubusercontent.com/23413093/44952756-f0cda280-ae5d-11e8-8388-46a5af3ae296.png)

## Usando Property Binding

O uso do property binding permite interagir com as propriedades do html ou dos componentes customizados e funciona de forma semelhante a interpolação.
Property binding pode vincular uma propriedade de um elemento à uma expressão typeScript.

- Declarada com o prefixo bind `bind-propriedadeDoElemento="variavelDoComponente"`. 
Ou 
- `[propriedadeDoElemento]="variavelDoComponente"`.

### Exemplo:

- Desabilitar o botão enquanto o input da descrição não possuir caracteres.
```html
  <button type="button" [disabled]="descricao.length == 0">Cadastrar</button>
```
#### Visualização
![04](https://user-images.githubusercontent.com/23413093/44952922-89b1ed00-ae61-11e8-9244-dcb971e9f18e.png)

## Usando Two-way data binding

Two-way data binding faz a via dupla da interação componente/template.
>`[(ngModel)]="variavelDoComponente"`

Se a propriedade estiver dentro de um form é preciso usar também `[ngModelOptions]="{standalone: true}"`.

*Importar o `FormsModule` no módulo que será usado.*

## Usando Diretivas condicionais

Uma diretiva condicional estrutural pode ser representada por `*ngIf="variavelDeCondicaoDoComponente"`, a diretiva estrutural altera a estrutura do DOM quando a condição é atendida.

Uma diretiva condicional de atributo pode ser representada por `[hidden]="variavelDeCondicaoDoComponente"`, a diretiva de atributo nesse caso não altera a DOM, ela simplesmente cumpre a função do atributo.

## Iterando com Diretivas

O `*ngFor` é uma diretiva estrutural que percorre uma determinada coleção do componente.
* Repetir a div para cada elemento 'x' da coleção de funcionários
```html
  <div *ngFor="let x of funcionarios">
```

## Criando Diretivas Customizadas

Para criar uma diretiva, execute `ng g d nome-da-diretiva`.

### Exemplo de diretiva:

- Essa diretiva altera a cor de fundo do elemento html
```typescript
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef, // manipula o elemento DOM
    private renderer: Renderer2 // abstrai a manipulação do elemento
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
```

- Para aplicar a diretiva em um elemento html é preciso usar o seletor `selector: '[appCampoColorido]'`.

- A injeção do `ElementRef` e `Renderer2` é feita automaticamente pelo CLI, basta usar o seletor em algum elemento. Através do construtor a diretiva é aplicada imediatamente em sua chamada.

```html
<input type="text" class="form-control"  appCampoColorido>
```

### Exemplo de diretiva com @HostListener:

Agora queremos aplicar a mesma diretiva criada acima, para ser aplicada quando o elemento ganhar o foco.

Para isso iremos usar o `@HostListener()` ele será o ouvinte do elemento, o evento que queremos capturar será passado como parâmetro no mesmo.

- Criar um método para aplicar a diretiva:
```typescript
  @HostListener('focus') // evento que será escutado pelo método (quando ocorrer foco o método será chamado).
  aoGanharFoco() { 
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
```

### Exemplo de diretiva com @HostBinding:

O `@HostBinding` substitui a necessidade de usar `ElementRef` e `Renderer2` para manipular os estados dos elementos.

- Alterando a classe para atender o mesmo objetivo do exemplo anterior
```typescript
...
export class CampoColoridoHbDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = 'pink';
  }
...
```
Agora as alterações serão feitas baseadas no atributo `corDeFundo` que está anotada com `@HostBinding` e seu parâmetro indica o que será manipulado `('style.backgroundColor')`.

### Fazendo property binding em diretiva customizada:

Para alterar o comportamento do elemento via property binding é necessário criar uma propriedade no componente e indicar (`@Input()`) que ela irá receber um valor vindo do template.
```typescript
...
@Input() corSecundaria = 'transparent';
...
@HostListener('blur') aoPerderFoco() {
    this.corDeFundo = this.corSecundaria;
  }
```
Esse trecho recebe do template a cor secundária que será aplicada ao perder o foco, o `@HostBinding` permanece como no exemplo anterior e no template informamos a cor secundária no elemento `[corSecundaria]="'orange'"`.

### Expondo os métodos da diretiva para o template:

- Para expor a API da diretiva, precisamos acrescentar o `exportAs: 'nomeDeAcesso'`:
```typescript
@Directive({
  selector: '[appCampoColoridoHb]',
  exportAs: 'colorirCampo'
})
```

- Com a diretiva exposta, no template devemos declarar uma variável local que aponte para o 'nomeDeAcesso' da diretiva:
```html
<input type="text" appCampoColoridoHb [corSecundaria]="'orange'" #campo="colorirCampo">
```
A partir da variável `#campo` podemos chamar os métodos da diretiva. Ex: `(click)="campo.aoGanharFoco()"`.





