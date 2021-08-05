## Install

```
$ npm install object-keys-camelcase
```

## Usage

```js
const objToCamel = require("object-keys-camelcase");
const myObj = {
    key_one: "value",
    another_key: "another value"
};

console.log(objToCamel(myObj));
```
Output:

```json
{
    keyOne: "value",
    anotherKey: "another value"
}
```