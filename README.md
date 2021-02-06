# Mini-curso de TypeScript - Willian Justen

[Link do youtube](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

## 1 - Introdução

[Site oficial do TypeScript](https://www.typescriptlang.org/)

* O que é o **TypeScript**?
    * É um *superset* do *JavaScript*
    * Adiciona novas *features* ao *JavaScript*
    * Basicamente, tipagem estática
    * Compila para JavaScript
    * Permite adoção gradual (arquivos *.ts* convivem com *.js*)
* Então, é uma linguagem ou não?
    * Embora anteriormente a Microsoft a apresentasse apenas, hoje o site já o define como *linguagem*
* Por que usar **TypeScript**?
    * Evita resultados inesperados. Exemplo:
```javascript
    function sum(a, b) {
        return a + b;
    }

    sum(1, 2); // 3
    sum('1', '2'); // 12 opa!
```
    * Avisa ser estivermos fazendo algo errado. Exemplo:
```typescript
    console.log(4 / []);
    /**
     * Mensagem do erro:
     * The right-hand side of an arithmetic operation mas be of type
     * 'any', 'number', 'bigint' or an enum type. ts(2363)
     */
```
    * Já funciona como uma espécie de documentação. Exemplo:
```typescript
    type Platform = 'Windows' | 'Mac OS' | 'Linux';
    type Feature = 'Single Player' | 'Multiplayer' | 'Co-op';

    interface GameDetails {
        id: string;
        title: string;
        description: string;
        platform: Platform[];
        features: Features[];
    }
```
    * Deixa sua IDE extremamente poderosa no auto-complete.
* Algumas desvantagens:
    * Necessita ser compilado (mais passos no tooling)
    * Aprendizado inicial dos tipos e boa práticas
    * Erros nem sempre muito claros ou então muito grandes