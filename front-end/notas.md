<!-- estrutura -->
app
  core
    header
    model
    services
  home
  recipes-list
   

<!-- criar interface/model -->
```
ng g i Recipe
```

<!-- criar serviço -->
```
ng g s Recipes
```

Declarativo refere-se ao uso de funções declaradas para executar ações. Você confia em funções puras que podem definir um fluxo de eventos. 
Com o RxJS, você pode ver isso na forma de observáveis ​​e operadores.

Uma função pura é uma função que sempre retornará saídas idênticas para entradas idênticas, não importa quantas vezes seja chamado. Em outras palavras, a função sempre produzirá previsivelmente a mesma saída.

* Isso torna seu código mais limpo e legível.
* Isso torna seu código mais fácil de testar porque é previsível.
* Ele permite armazenar em cache a saída do fluxo com uma determinada entrada, e isso melhorará o desempenho.
* Ele permite que você aproveite os operadores RxJS e transforme e combine fluxos provenientes de diferentes serviços ou até mesmo dentro do mesmo serviço.
* Ele ajuda você a reagir facilmente às interações do usuário para executar uma ação.

Na estratégia OnPush , o Angular só executará o detector de alterações quando ocorrer o seguinte:

Condição 1 : A referência da propriedade @Input de um componente muda (lembre-se que quando o objeto da propriedade input é modificado diretamente então a referência do objeto não mudará e consequentemente o detector de mudança não será executado. Neste caso devemos retornar uma nova referência do objeto de propriedade para acionar a detecção de alteração).
Condição 2 : Um manipulador de eventos de componente é emitido ou é acionado.
Condição 3 : Um limite observável por meio do pipe assíncrono emite um novo valor.
Portanto, usar a estratégia changeDetection OnPush minimiza quaisquer ciclos de detecção de alterações e apenas verificará as alterações para renderizar novamente nossos componentes nos casos anteriores. Essa estratégia se aplica a todas as diretivas filhas e não pode ser substituída.

Em nosso cenário, só precisamos que o detector de alterações seja executado se obtivermos um novo valor; caso contrário, obtemos atualizações inúteis. Portanto, nosso cenário corresponde à Condição 3 . A boa notícia é que podemos usar a estratégia onPush de detecção de alterações da seguinte forma:

```
import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

Em poucas palavras, usando opadrão reativo para buscar dados garantirá o seguinte:

Melhora o desempenho do seu aplicativo.
Melhora a estratégia de detecção de alterações.
Melhora a clareza e a legibilidade do código.
Isso torna o código mais declarativo e mais reativo.
Isso torna mais fácilpara alavancar os operadores RxJS.
Torna mais fácil reagir à ação do usuário.

O método subscribe() recebe como entrada o objeto Observer, que possui três callbacks:

Um retorno de chamada de sucesso : isso échamado toda vez que o stream emite um valor e recebe como entrada o valor emitido.
Um retorno de chamada de erro : Este échamado quando ocorre um erro e recebe como entrada o próprio erro.
Um retorno de chamada de conclusão : isso échamado quando o fluxo é concluído.
