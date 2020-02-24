# Code in a hat Core Library

## Installation

This is a [Node.js](https://nodejs.org) module available through the [npm registry](https://npmjs.com). 
Installation is done using the [`npm install` command:](https://docs.npmjs.com/downloading-and-installing-packages-locally)

```sh
    $ npm install @codeinahat/core
```

## API

```js
    const codeinahat = require('@codeinahat/core');
```

The above api call will modify some of the prototypes of `native` JS data types. Giving you access to some really cool functions. Having utilize the `List` class from `C#` `System.Collections.Generic` a lot while developing webiste with `ASP.NET MVC`. I came to really like the methods of the `class List`. This was what stared me on the path to write a Library that allowed you to do the same with [`JavaScript`](https://www.w3schools.com/js/default.asp). I hope it becomes useful for many developers
in the future.

Simple calling the [API](#api) will add methods the below data types by modifying the `Object.prototype`

### Modified Data Types
- [`Array`](#array)



### Array
  ### Methods and Properties
  - [FirstOrDefault](#firstordefault)

  #### FirstOrDefault
  `FirstOrDefault` is a method added by the `codeinahat.core` Library. The functionality is simple. It will provide you with the `first` item of an [Array](#array) or `default` to a `null` value. It is also possible
  to pass a function specifying criterias. This way the `FirstOrDefault` method will return the first item that matches the criteria.

  ```js
    // Array
    const group = [
        {name: "Tito",age: 10, role: "sys_admin"},
        {name: "Pedro", age: 25, role: "sales_sup"},
        {name: "Toney", age: 30, role: "coorp"},
        {name: "Harry", age: 20, role: "coord"}
    ]
    
    // returns the first item of the array or null if there is none
    let first = group.FirstOrDefault();
    // first = {name: "Tito",age: 10, role: "sys_admin"}

    // returns the first item that matches the criteria
    let first = group.FirstOrDefault(i => i.name === 'Toney')
    // first = {name: "Toney", age: 30, role: "coorp"}
  ```

  **note** The porpuse is to provide a simple way to get the first item that meets a criteria. Very useful when you want to grab the user from a database by username/id.

  