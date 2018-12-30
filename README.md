# @draganfilipovic/html-elements-list
list all html elements in multiple files with occurrence statistic per file.

## Install
```
npm i @draganfilipovic/html-elements-list
```

## How to use
```
const getHtmlElements = require('@draganfilipovic/html-elements-list');

(async () => {
    console.log(await getHtmlElements());
})();

//{ total: { html: 2, head: 2, body: 2, p: 3, div: 1, a: 2, br: 2, img: 2 },
//  files: 
//   { 'test2.html': { html: 1, head: 1, body: 1, p: 2, div: 1, a: 1, br: 1, img: 1 },
//     'test.html': { html: 1, head: 1, body: 1, p: 1, a: 1, br: 1, img: 1 } } }
```

## Parameters
1st: path to directory, relative or absolute [optional]. 
Default value is current working dir - `process.cwd()`.

2nd: files extension [optional].
Default value is `.html`.

```
(async () => {
    console.log(await getHtmlElements('./examples'));
})();
```
