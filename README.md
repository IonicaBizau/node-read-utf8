
# read-utf8

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/read-utf8.svg)](https://www.npmjs.com/package/read-utf8) [![Downloads](https://img.shields.io/npm/dt/read-utf8.svg)](https://www.npmjs.com/package/read-utf8)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`ajs`](https://github.com/IonicaBizau/ajs#readme)—Asynchronous templating in Node.js
 - [`arc-asm`](https://github.com/IonicaBizau/arc-assembler)—An ARC assembler written in Node.JS.
 - [`emojer-cli`](https://github.com/IonicaBizau/emojer-cli#readme)—Command line tool for emojer.
 - [`exec-limiter-cli`](https://github.com/IonicaBizau/exec-limiter-cli#readme)—Run multiple shell commands in parallel, but with a limit.
 - [`learning-node-cheerio-test`](https://github.com/IonicaBizau/learning-nodejs#readme)—Learning how to manipulate DOM using Node.js
 - [`mdify`](https://github.com/IonicaBizau/mdify#readme)—Markdown helpers with metadata support.
 - [`mdy`](https://github.com/IonicaBizau/mdy#readme)—View markdown files in the command line with ANSI styled images.
 - [`nodeice`](https://github.com/IonicaBizau/nodeice)—Another PDF invoice generator
 - [`read-file-cache`](https://github.com/IonicaBizau/read-file-cache#readme)—Read files and cache them.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
