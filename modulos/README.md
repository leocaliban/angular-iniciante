# Modulos

Para melhor organizar um projeto, é indicado o agrupamento dos componentes, diretivas e pipes em módulos.

## Criando módulos

Para criar um módulo execute `ng generate module nomeModulo` ou `ng g m nomeModulo`. 

Para criar um componente dentro desse módulo, execute `ng g c nomeModuloe/nomeComponente`.

Os componentes que foram criados em um módulo, por padrão, só são usados por esse módulo.
Quando um módulo precisar utilizar um componente de outro módulo, é preciso declarar a exportação do componente no módulo que detém o componente que será utilizado.

* Ex: Módulo 1 quer usar um componente do Módulo 2
```typescript
//No Módulo 1
...
  imports: [
    BrowserModule,
    Modulo2 // <---- apontar o Módulo que detém o componente desejado nos imports
  ],
...

//No Módulo 2
...
  declarations: [Componente],
  exports: [Componente] // <---- apontar a exportação do componente para que seja acessado pelo outro módulo
...
```
Feito isso, o template do Módulo 1 reconhecerá o componente do Módulo 2.



