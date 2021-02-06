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

## 2. Mitos e verdades

* Vou ter que aprender tudo de novo. **falso**
* Vou precisar reescrever tudo para TypeScript. **falso**
* Já escrevo testes, não preciso disso. **falso**
* Só funciona com programação orientada a objeto. **falso**
* Ele é verboso demais, precisa tipar tudo. **falso**
* Só serve para projetos grandes. **falso**
* É só usar *PropTypes* que dá na mesma. **falso**

## 3. Instalando o compilador e escrevendo primeiro código

[Site do TypeScript](https://www.typescriptlang.org/pt/)

* comandos para compilar:
```
tsc <nome do arquivo>
tsc <nome do arquivo> --watch
```
* O comando com o ```watch``` manterá o compilador assistindo ao arquivo.

## 4. Criando e configurando TSconfig

* Para criar o arquivo de configuração "tsconfig.json" utilizamos o comando:
```
tsc --init
```
* A partir da criação deste arquivo, podemos compilar utilizando apenas o comando ```tsc``` ou ```tsc --watch```.

## 5. types

```typescript
// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = 'foo';

// number (int, float, hex, binary)
let total: number;
total = 20.3;

// array (type[])
let items: string[]
items = ['foo', 'bar'];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, 'foo', 'bar'];

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa)
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log('foo');
}

// null / undefined
type bla = string | undefined;

// never
function error(): never {
  throw new Error('error');
}

// object ()
let cart: object;
cart = {
  key: 'fi',
}
```

## 6. Type Inference

* Em alguns momentos eu posso declarar a variável e já atribuir um valor, o TypeScript automaticamnente irá inferir o tipo de acordo com o valor passado a variável.

```typescrip
let msg = 'mensagem definida';
msg = 'nova string';
```

## 7. Type Aliases e Union

```typescript
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);   
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`);   
}

type Platform = 'Windows' | 'Linux' | 'Mac Os';

function renderPlatform(platform: Platform) {
    return platform;
}

renderPlatform('Windows');

logDetails(123, "sapato");
logDetails('123', "sapato");

logInfo(123, 'William');
logInfo('123', 'William');
```