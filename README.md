<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# read-utf8 [![Donate now][donate-now]][paypal-donations]

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

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png