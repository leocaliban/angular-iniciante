# Formularios

## Template-Driven Forms
Para manipular formulários com o Angular é preciso registrar o `FormsModule` no `app.module` para que o formulário passe a ser gerenciado pelo Angular.

A diretiva do `FormsModule` é exposta como `form` do template (*para negar isso, basta usar `ngNoForm`*).

```html
<!-- Declarando a variável local de acesso para o formulário '#usuarioForm', 
inicializar essa variável com a diretiva 'ngForm' que é exportada pela diretiva do 'form' 
e através do '(ngSubmit)' é possível passar o formulário para o componente manusear seus dados -->
<form #usuarioForm="ngForm" (ngSubmit)="salvar(usuarioForm)">
```
Após manipular o form é preciso registrar os controles do formulário para possibilitar o acesso de cada input, para isso é preciso declarar a diretiva `ngModel` em cada input e nomear o input `name="nome-da-propriedade"`, esse nome será usado para recuperar o valor digitado no iunput.
