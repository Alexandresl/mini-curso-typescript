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