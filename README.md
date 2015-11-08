# read-utf8 [![Support this project][donate-now]][paypal-donations]

Reads files using the utf-8 encoding.

## Installation

```sh
$ npm i read-utf8
```

## Example

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

## Documentation

### `ReadFile(path, {Function}callback)`

#### Params
- **String** `path`: The path to the file.
- **** `{Function}callback`: The callback function.

#### Return
- **String** If the `callback` was not provided, the file content is returned.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`learning-node-cheerio-test`](https://github.com/IonicaBizau/learning-nodejs#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md