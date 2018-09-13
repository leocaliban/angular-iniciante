# Pipes

O pipe é uma funcionalidade que pega o valor de uma entrada e o transforma em uma saída desejada. 
O pipe não altera o valor da variável, ele faz a representação visual dos dados no template.

* Pipes para Strings:
```typescript
{{ nome | uppercase }}
{{ nome | lowercase }}
```

* Pipes para Dates:
```typescript
{{ dataAniversario | date }} // padrão
```

* Pipes para Valores decimais:
```typescript
{{ preco | number }} // padrão
```

* Pipes para Dinheiro:
```typescript
{{ troco | currency }} // padrão dolar
```
![05](https://user-images.githubusercontent.com/23413093/45467178-a9b09e80-b6f4-11e8-9c6c-36c765a710f0.png)
*Sem pipe | Com pipe*

*[Documentação Angular - Pipes](https://angular.io/api?query=pipe)*
