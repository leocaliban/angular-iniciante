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
```
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

