# Pipes

O pipe é uma funcionalidade que pega o valor de uma entrada e o transforma em uma saída desejada. 
O pipe não altera o valor da variável, ele faz a representação visual dos dados no template.

* Pipe para Strings:
```typescript
{{ nome | uppercase }}
{{ nome | lowercase }}
```

* Pipe para Dates:
```typescript
{{ dataAniversario | date }} // padrão
```

De acordo com a necessidade o pipe também pode ser encadeado: 
```typescript
{{ dataAniversario | date | uppercase }}
```

* Pipe para Valores decimais:
```typescript
{{ preco | number }} // padrão
```

* Pipe para Dinheiro:
```typescript
{{ troco | currency }} // padrão dolar
```

![05](https://user-images.githubusercontent.com/23413093/45467178-a9b09e80-b6f4-11e8-9c6c-36c765a710f0.png)

*Sem pipe | Com pipe*

*[Documentação Angular - Pipes](https://angular.io/api?query=pipe)*

## Passando parâmetros para os Pipes

* Pipes com parâmetros:
```typescript
{{ dataAniversario | date:'dd/MM/y' }}
{{ preco | number:'1.2-2' }}
{{ troco | currency:'BRL' }}
```
![06](https://user-images.githubusercontent.com/23413093/45508389-15355300-b76b-11e8-9b6b-1d245c57d1c7.png)
