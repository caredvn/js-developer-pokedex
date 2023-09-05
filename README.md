# Trilha JS Developer - Pokedex
O projeto consiste na aplicação da API [PokeAPI](https://pokeapi.co) para construção de uma Pokedex.

## Conteúdos
- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Autora](#autora)
- [Reconhecimentos](#reconhecimentos)

## Visão geral

### O desafio
O desafio consiste na construção do projeto Pokedex a partir do que foi ensinado nos cursos de Javascript da [DIO](https://web.dio.me/home).

### Screenshot

Versão mobile (até 425px)

![Pokedex - interface mobile]()

Versão tablet (426px ---> 1023px)

![Pokedex - interface tablet]()

Versão desktop (a partir de 1024px)

![Pokedex - interface tablet]()

### Links

- URL da minha solução [Pokedex - Solução](https://js-developer-pokedex-kappa.vercel.app)

## Meu processo

### Construído com

- **HTML5 semântico**
- **Propriedades do CSS**
  - Metodologia BEM
  - Media query
  - Flexbox
- **Javascript**
  - API [PokeAPI](https://pokeapi.co)


### O que eu aprendi

Durante o desenvolvimento deste projeto, aprendi a utilizar a função `fetch` para fazer requisições a APIs externas. Aprendi também a organização para um código mais limpo e legível, um dos médotos utilizados foi a utilização de classes. 

**1 - Como Fazer uma Requisição GET:**
```Javascript
pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
```
Entendi como lidar com as respostas da API, incluindo a conversão dos dados recebidos em um formato utilizável (geralmente JSON). Isso envolve o uso dos métodos json(), text(), ou outros, dependendo da resposta da API.

**2 - Construtores e Propriedades**
- Aprendi como criar e utilizar construtores em classes JavaScript.
- Entendi o conceito de propriedades de classe e como inicializá-las.
- Explorei como personalizar construtores para inicializar propriedades com valores específicos.

## Autora

- Linkedin - [Caren de Paula Lourenço Divino](https://www.linkedin.com/in/caren-de-paula-lourenço-divino-1a8536231/)
- Github - [Caren Divino](https://github.com/caredvn)

## Reconhecimentos

O design deste projeto foi inspirado no trabalho de [Saepul Nahwan](https://dribbble.com/saepulnahwan23), que gentilmente compartilhou seu design no [Dribbble](https://dribbble.com/shots/6540871-Pokedex-App).

Tudo o que foi utilizado foi aprendido nos cursos "**Criando um Projeto com HTML/CSS para Listagem de Pokémon**" e "**Dominando o Protocolo HTTP e Integrando com a PokeAPI**" da [DIO](https://web.dio.me/home)
