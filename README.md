# Codeinahat Core Library

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
- [`Array`](#array-docs-on-array)
- [`String`](#string-docs-on-string)


### Array [`docs on arrays`](https://www.w3schools.com/js/js_arrays.asp)
  #### Methods and Properties
  - [Distinct](#distinct)
  - [FirstOrDefault](#firstordefault)
  - [Select](#select)
  - [Where](#where)
  
  #### Distinct
  `Distinct` is method that returns an [`Array`](#array) but withouth duplicates if it contains any.

  ```js
    // Array
    const group = [
      {name: "Tito",age: 10, role: "sys_admin"},
      {name: "Pedro", age: 25, role: "sales_sup"},
      {name: "Toney", age: 30, role: "coorp"},
      {name: "Harry", age: 20, role: "coord"},
      {name: "Tito",age: 10, role: "sys_admin"},
    ]

    // returns a new Array but without duplicates
    let noDuplicates = group.Distinct()
    /*
      noDuplicates = [
      {name: "Tito",age: 10, role: "sys_admin"},
      {name: "Pedro", age: 25, role: "sales_sup"},
      {name: "Toney", age: 30, role: "coorp"},
      {name: "Harry", age: 20, role: "coord"},
    ]
    */
  ```
  **note** The difference between the two Arrays is that the `noDuplicates` is missing the last `Object` because it was `equal` to the first `Object` the [Distinct](#distinct) method purge it.


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
  **note** The purpose is to provide a simple way to get the first item that meets a criteria. Very useful when you want to grab the user from a database by username/id.


  #### Select
  `Select` should be use when you have an [`Array`](#array) that contains complex objects. For example, if you have an array of users and instead of getting all the user data
  you just want to grab the first name. You would do the following.

  ```js
    // Array
    const group = [
        {name: "Tito",age: 10, role: "sys_admin"},
        {name: "Pedro", age: 25, role: "sales_sup"},
        {name: "Toney", age: 30, role: "coorp"},
        {name: "Harry", age: 20, role: "coord"}
    ]

    // returns only the first names
    let names = group.Select(g => g.name)
    // names = ['Tito', 'Pedro', 'Toney', 'Harry']
  ``` 

  #### Where

  `Where` returns an `Array` of objects that match a criteria passed to it. For exampe if you wanted to grab all the users that are 20 year old or less.

  ```js
    //Array
    const group = [
        {name: "Tito",age: 10, role: "sys_admin"},
        {name: "Pedro", age: 25, role: "sales_sup"},
        {name: "Toney", age: 30, role: "coorp"},
        {name: "Harry", age: 20, role: "coord"}
    ]

    // returns only the objects that match the criterias
    let youngOnes = group.Where(i => i.age =< 20);
    /* 
      youngOnes = const group = [
        {name: "Tito",age: 10, role: "sys_admin"},
        {name: "Harry", age: 20, role: "coord"}
    ] 
    /*
  ```

### String [`docs on string`](https://www.w3schools.com/js/js_strings.asp)
  #### Methods and Properties
  - [IsEmail](#isemail)
  - [IsNullOrEmpty](#isnullorempty)

  ### IsEmail
  `IsEmail` is a method that verifies if a string is a structured as a valid email address.

  ```js
    let email = 'sample@email.com'
    console.log(email.IsEmail());
    // logs a true value
      
    let email = 'sample@email';
    console.log(email.IsEmail())
    // logs a false value
  ```

  ### IsNullOrEmpty
  `IsNullOrEmpty` is a mehtod that will check if a `string` is either `null` or it deos not contain any characters.

  ```js
    let s = 'Hello World'
    console.log(s.IsNullOrEmpty())
    // return a false value

    let s;
    console.log(s.IsNullOrEmpty())
    // will throw an error since s is undefined it has not been declared as any datatype

    let s = null;
    console.log(s.INullOrEmpty())
    // will throw an erri since s is null not a string

    let s = '';
    console.log(s.IsNullOrEmpty())
    // returns true since a value '' is considered a empty value
     
     let s = '         ';
     console.log(s.IsNullOrEmpty())
     // returns true since any number of empty spaces is considered an empty value.
  ```

  **note** 
  The name IsNullOrEmpty can be misleading since it will give you the impression that null values will be identified. This is a working issue,
  for now we recomend that you use the function as follows.

  ```js
    let s = null;
    try{
      s.IsNullOrEmpty();
    }
    catch(error) {
      console.log(error);
      // code to handle error makes for more user firendly application and keeps your app from crashing completly.
      // if one function fails.
    }
  ```

  **note**
  In the above code if `s` is null you would handle the error with a `try - catch` code block. Our team is working on a solution to make the `try - catch`
  native to the method.