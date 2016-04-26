
# read-utf8 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/read-utf8.svg)](https://www.npmjs.com/package/read-utf8) [![Downloads](https://img.shields.io/npm/dt/read-utf8.svg)](https://www.npmjs.com/package/read-utf8) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Reads files using the utf-8 encoding.

## :cloud: Installation

```sh
$ npm i --save read-utf8
```


## :clipboard: Example



```js
// Dependencies
var ReadFile = require("read-utf8");

// Sync
console.log(ReadFile(__dirname + "/1.txt"));
debugger
// => 1.txt content

// Async
ReadFile(__dirname + "/2.txt", function (err, content) {
    console.log(err || content);
    // => An error or the 1.txt content
});
```

## :memo: Documentation


### `ReadFile(path, {Function}callback)`

#### Params
- **String** `path`: The path to the file.
- **** `{Function}callback`: The callback function.

#### Return
- **String** If the `callback` was not provided, the file content is returned.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`arc-asm`](https://github.com/IonicaBizau/arc-assembler)—An ARC assembler written in Node.JS.
 - [`emojer-cli`](https://github.com/IonicaBizau/emojer-cli#readme)—Command line tool for emojer.
 - [`learning-node-cheerio-test`](https://github.com/IonicaBizau/learning-nodejs#readme)—Learning how to manipulate DOM using Node.js
 - [`nodeice`](https://github.com/IonicaBizau/nodeice)—Another PDF invoice generator
 - [`rucksack`](https://github.com/IonicaBizau/rucksack#readme)—Bundle js files by replacing the require calls in-place.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
