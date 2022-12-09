# Giganto

# Installation

<p>In a browser:</p>

```html
<script src="PATH/TO/index.js"></script>
```

<p>Using npm:</p>

```shell
npm i giganto
# or
yarn add giganto
```

<p>By default, the module supports require:</p>

```js
const _ = require('giganto');
const array = [0, 1, false, 2, '', 3, NaN, 4, undefined, 5, 6, Boolean(0)];
_.compact(array);
// => [0, 1, 2, 3, 4, 5, 6]
```

<p>The module also ships with <code>giganto</code> for use with import:</p>

```js
import _ from 'giganto';

const array = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];
_.dropRightWhile(array, ({ active }) => !active);
// => [{ user: 'Ben', active: false }, { user: 'Vic', active: true }]
```

# Why Giganto?

<p><code>Giganto</code> simplifies JavaScript, eliminating the hassle of working with arrays, numbers, objects, strings, etc. Modular <code>Giganto</code> methods are great for:</p>
<ul>
  <li>Repetition of arrays, objects, and strings</li>
  <li>Manipulating and testing values</li>
  <li>Creating composite functions</li>
</ul>

# Usage

<details open>
<summary>
  <b>Array</b>
</summary>

  <pre>_.chunk(values, [size=1])</pre>
  <p>Creates an array of elements divided into groups. The groups are divided into uniform parts that are equal to the argument <code>[length=1]</code>. If the array cannot be divided evenly, the last fragment will be the remaining elements.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to process.</li>
    <li><code>[length=1]</code> <em>(number)</em>: The length of each chunk</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of chunks.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

  </details>

#

  <pre>_.compact(values)</pre>
  <p>Creates a new array and removes all false values from it. The values <code>false</code>, <code>null</code>, <code>""</code>, <code>undefined</code> and <code>NaN</code> are false. Note that the value <code>0</code> is not false.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to compact.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.compact([0, 1, false, 2, '', 3, NaN, 4, undefined, 5, 6, Boolean(0)]);
// => [0, 1, 2, 3, 4, 5, 6]
```

</details>

#

  <pre>_.concat(values, [args])</pre>
  <p>Creates a new array combining an array with any additional values.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to concatenate.</li>
    <li><code>[...args]</code> <em>(...*)</em>: The values to concatenate.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new concatenated array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [1, { user: 'Vic' }];

_.concat(array, 2, [3], [[4]], { user: 'Nat' });
// => [1, { user: 'Vic' }, 2, [3], [[4]], { user: 'Nat' }]

console.log(array);
// => [1, { user: 'Vic' }]
```

  </details>

#

  <pre>_.difference(values, [args])</pre>
  <p>Creates a new array of values, excluding matches from the <code>args</code> argument.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to exclude.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.difference([2, 1], [2, 3]);
// => [1]
```

  </details>

#

  <pre>_.differenceBy(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.difference</code>, except that it takes the third <code>predicate</code> argument, it is a function with a single argumet of type <code>args:T</code>, it is called for each element of the array and values to generate a criterion by which they are compared.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to exclude.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], ({ x }) => x);
// => [{ 'x': 2 }]
```

  </details>

#

  <pre>_.differenceWith(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.differenceBy</code>, except that it takes a third predicate argument with two parameters, <code>values: T</code> and <code>args:T</code>. The predicate is called for each element of the array and values to generate a criterion by which they are compared.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to exclude.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.differenceWith([1, 2, 3, 6], [4, 5, 2, 2, 1], _.isEqual);
// => [3, 6]

_.differenceWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x);
// => [{ 'x': 2 }]
```

  </details>

#

  <pre>_.drop(values, [num=1])</pre>
  <p>Creates a fragment of an array with <code>n</code> elements deleted from the beginning.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[num=1]</code> <em>{Number}</em>: The number of elements to drop.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

  </details>

#

  <pre>_.dropRight(values, [num=1])</pre>
  <p>Creates a fragment of an array with <code>n</code> elements deleted from the end.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[num=1]</code> <em>{Number}</em>: The number of elements to drop.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

  </details>

#

  <pre>_.dropRightWhile(values, [predicate])</pre>
  <p>Creates an array fragment that excludes elements removed from the end. Elements are discarded until the predicate returns false. The predicate is called with three arguments: (<code>value</code>, <code>index</code>, <code>array</code>). Only <code>value</code> is required, the rest of the predicate arguments are optional.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.dropRightWhile(users, ({ active }) => !active);
// => [{ user: 'Ben', active: false }, { user: 'Vic',  active: true }]
```

  </details>

#

  <pre>_.dropWhile(values, [predicate])</pre>
  <p>Creates an array fragment that excludes elements removed from the beginning. Elements are discarded until the predicate returns false. The predicate is called with three arguments: (<code>value</code>, <code>index</code>, <code>array</code>). Only <code>value</code> is required, the rest of the predicate arguments are optional.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.dropWhile(users, ({ active }) => !active);
// => [{ user: 'Vic',  active: true }, { user: 'Nat', active: false }, { user: 'Den', active: false }]
```

  </details>

#

  <pre>_.fill(values, value, [start=0], [end=values.length])</pre>
  <p>Creates a new array and fills its elements with the value from the <code>value</code> argument from beginning to end, but not including <code>end</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to fill.</li>
    <li><code>value</code> <em>(*)</em>: The value to fill array with.</li>
    <li><code>[start=0]</code> <em>(Number)</em>: The start position.</li>
    <li><code>[end=values.length]</code> <em>(Number)</em>: The end position.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns new array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.fill([1, 2, 3, 4], 'N', 0, -2);
// => ['N', 'N', 3, 4]

_.fill([1, 2, 3, 4], 'N', 1, 3);
// => [1, 'N', 'N', 4]
```

  </details>

#

  <pre>_.findIndex(values, [predicate])</pre>
  <p>This method is similar to <code>_.find</code>, except that it returns the index of the first element, the predicate returns <code>true</code> instead of the element itself.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the index of the found element, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.findIndex(users, ({ user }) => user === 'Vic');
// => 1
```

  </details>

#

  <pre>_.findLastIndex(values, [predicate])</pre>
  <p>This method is similar to <code>_.findIndex</code>, except that it iterates through the elements of the collection from right to left.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the index of the found element, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.findLastIndex(users, ({ user }) => user !== 'Den');
// => 2
```

  </details>

#

  <pre>_.flatten(values, [depth])</pre>
  <p>Recursively flatten the array to the depth of times.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to flatten.</li>
    <li><code>[depth]</code> <em>{Number}</em>: The maximum recursion depth.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new flattened array.</li>
  </ol>

  <details>
 <summary><b>Example</b></summary>

```js
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

_.flatten([1, [2, [3, [4]], 5]], 5);
// => [1, 2, 3, 4, 5]
```

  </details>

#

  <pre>_.fromPairs(values)</pre>
  <p>Reverse <code>_.toPairs</code>, this method returns an object consisting of key-value pairs.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The key-value pairs.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Object)</em>: Returns the new object.</li>
  </ol>

  <details>
 <summary><b>Example</b></summary>

```js
_.fromPairs([
  ['a', 1],
  ['b', 2],
  ['a', 2],
]);
// => {a: 2, b: 2}
```

  </details>

#

  <pre>_.head(values)</pre>
  <p>Returns the first element of the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(*)</em>: Returns the first element of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.head(users);
// => { user: 'Vic', active: true }
```

  </details>

#

  <pre>_.indexOf(values, value)</pre>
  <p>Returns the index of the first value found in the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to search for.</li>
    <li><code>[fromIndex=0]</code> <em>(Number)</em>: The value to search for.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index of the matched value, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.indexOf([1, 2, 1, 2, 5], 2);
// => 1

_.indexOf([1, 2, 1, 2, 5], 2, 3);
// => 3
```

  </details>

#

  <pre>_.initial(values)</pre>
  <p>Returns all elements of the array excluding the last one.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.initial([1, 2, 3]);
// => [1, 2]
```

  </details>

#

  <pre>_.intersection(values, [args])</pre>
  <p>Creates a new array of values, including matches from the <code>args</code> argument.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to include.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of intersecting values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.intersection([2, 1], [2, 3]);
// => [2]
```

  </details>

#

  <pre>_.intersectionBy(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.intersection</code>, except that it takes the third <code>predicate</code> argument, it is a function with a single argumet of type <code>args:T</code>, it is called for each element of the array and values to generate a criterion by which they are compared.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to exclude.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]

_.intersectionBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], ({ x }) => x);
// => [{ 'x': 1 }]
```

  </details>

#

  <pre>_.intersectionWith(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.intersectionBy</code>, except that it takes a third predicate argument with two parameters, <code>values: T</code> and <code>args:T</code>. The predicate is called for each element of the array and values to generate a criterion by which they are compared.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to exclude.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.intersectionWith([1, 2, 3, 6], [4, 5, 2, 2, 1], _.isEqual);
// => [1, 2]

_.intersectionWith([{ x: 2 }, { x: 1 }], [{ x: 1 }], (a, b) => a.x === b.x);
// => [{ 'x': 1 }]
```

  </details>

#

  <pre>_.join(array, [separator=','])</pre>
  <p>Converts all array elements to a delimited string.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to convert.</li>
    <li><code>[separator=',']</code> <em>{String}</em>: The element separator.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the joined string.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

  </details>

#

  <pre>_.last(values)</pre>
  <p>Returns the last element of the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(*)</em>: Returns the last element of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.last(users);
// => { user: 'Den', active: false }
```

  </details>

#

  <pre>_.lastIndexOf(values, value)</pre>
  <p>This method is similar to <code>_.indexOf</code>, except that it iterates through the array elements from right to left.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to search for.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index of the matched value, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.lastIndexOf([1, 2, 1, 2, 5], 2);
// => 3
```

  </details>

#

  <pre>_.nth(array, [num=0])</pre>
  <p>Returns an element with the index <code>num</code> of the array. If <code>num</code> is negative, the <code>nth</code> element from the end is returned.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[num=0]</code> <em>(Number)</em>: The index of the element to return.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(*)</em>: Returns the nth element of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.nth(users, 2);
// => { user: 'Nat', active: false }

_.nth(users, -3);
// => { user: 'Vic', active: true }
```

  </details>

#

  <pre>_.pull(values, [args])</pre>
  <p>Deletes all the specified values from the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[args]</code> <em>(...*)</em>: The values to remove.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

  </details>

#

  <pre>_.pullAll(values, [args])</pre>
  <p>DThis method is similar to <code>_.pull</code>, deletes all the specified values from the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[args]</code> <em>(Array)</em>: The values to remove.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```

  </details>

#

  <pre>_.pullAllBy(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.pullAll</code>, except that it takes a predicate, which is called for each element of the array and values to generate a criterion by which they are compared. Predicate is called with a single argument <code>args: T</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>:The array to modify.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to remove.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.pullAllBy(
  users,
  [
    { user: 'Vic', active: true },
    { user: 'Nat', active: false },
  ],
  ({ user }) => user,
);
console.log(users);
// => [{ user: 'Ben', active: false }, { user: 'Den', active: false }]
```

  </details>

#

  <pre>_.pullAllWith(values, [args], [predicate])</pre>
  <p>This method is similar to <code>_.pullAll</code>, except that it takes a predicate, which is called for each element of the array and values to generate a criterion by which they are compared. Predicate is called with two arguments <code>values: T</code> and <code>args: T</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[args]</code> <em>{Array}</em>: The values to remove.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];

_.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual);
console.log(array);
// => [{ x: 1, y: 2 }, { x: 5, y: 6 }]
```

  </details>

#

  <pre>_.pullAt(array, [indexes])</pre>
  <p>Removes elements from the array corresponding to the indexes and returns an array of deleted elements.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[indexes]</code> <em>{Array}</em>: The indexes of elements to remove.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of removed elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = ['a', 'b', 'c', 'd'];

_.pullAt(array, [0, 2]);
// => ['b', 'd']

console.log(array);
// => ['a', 'c']
```

  </details>

#

  <pre>_.remove(values, [predicate])</pre>
  <p>Removes all elements from the array for which the predicate returns true, and returns an array of deleted elements. The predicate is called with three arguments: (<code>value</code>, <code>index</code>, <code>array</code>).</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of removed elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

const array = _.remove(users, ({ active }) => !active);

console.log(users);
// => [{ user: 'Vic', active: true }]

console.log(array);
// => [{ user: 'Ben', active: false }, { user: 'Nat', active: false }, { user: 'Den', active: false }]
```

  </details>

#

  <pre>_.reverse(values)</pre>
  <p>Returns an array in reverse order.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

  </details>

#

  <pre>_.slice(values, [start=0], [end=values.length])</pre>
  <p>Creates a fragment of the array from the beginning to, but not including the end.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to modify.</li>
    <li><code>[start=0]</code> <em>(Number)</em>: The start position.</li>
    <li><code>[end=values.length]</code> <em>(Number)</em>: The end position.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [1, 2, 3];

_.slice(array, 1, 2);
// => [2]

_.slice(array, 1);
// => [2, 3]
```

  </details>

#

  <pre>_.sortedIndex(values, [value])</pre>
  <p>Uses binary search to determine the smallest index by which the value should be inserted into the array to preserve the sort order.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The sorted array to inspect.</li>
    <li><code>[value]</code> <em>(*)</em>: The value to evaluate.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index at which value should be inserted into array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [30, 50, 60, 70];

_.sortedIndex(array, 40);
// => 1
```

  </details>

#

  <pre>_.sortedIndexBy(values, [value], [predicate])</pre>
  <p>This method is similar to <code>_.sortedIndex</code>, except that it takes a predicate, which is called for the value and each element of the array to calculate their sort rank. Predict is called with a single argument <code>values: T</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The sorted array to inspect.</li>
    <li><code>[value]</code> <em>(*)</em>: The value to evaluate.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index at which value should be inserted into array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', age: 30 },
  { user: 'Nat', age: 50 },
  { user: 'Den', age: 60 },
];

_.sortedIndexBy(users, { user: 'Vic', age: 40 }, ({ age }) => age);
// => 1
```

  </details>

#

  <pre>_.sortedIndexOf(values, value)</pre>
  <p>This method is similar to <code>_.indexOf</code>, except that it performs a binary search on a sorted array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to search for.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index of the matched value, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [40, 50, 50, 50, 60];

_.sortedIndexOf(array, 50);
// => 1

_.sortedIndexOf(array, 41);
// => -1
```

  </details>

#

  <pre>_.sortedLastIndex(values, value)</pre>
  <p>This method is similar to <code>_.sortedIndex</code>, except that it returns the highest index by which the value should be inserted into the array to preserve the sort order.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to evaluate.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index at which value should be inserted into array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [4, 5, 5, 5, 6];

_.sortedIndexBy(array, 5);
// => 4
```

  </details>

#

  <pre>_.sortedLastIndexBy(values, value, [predicate])</pre>
  <p>This method is similar to <code>_.sortedLastIndex</code>, except that it takes a predicate, which is called for the value and
 * each element of the array to calculate their sort rank. Predict is called with a single argument <code>value: T</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The sorted array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to evaluate.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index at which value should be inserted into array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', age: 30 },
  { user: 'Vic', age: 40 },
  { user: 'Vic', age: 40 },
  { user: 'Nat', age: 50 },
  { user: 'Den', age: 60 },
];

_.sortedLastIndexBy(users, { user: 'Vic', age: 40 }, ({ age }) => age);
// => 3
```

  </details>

#

  <pre>_.sortedLastIndexOf(values, value)</pre>
  <p>This method is similar to <code>_.lastIndexOf</code>, except that it performs a binary search on a sorted array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>value</code> <em>(*)</em>: The value to search for.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the index of the matched value, else -1.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = [40, 50, 50, 50, 60];

_.sortedIndexOf(array, 50);
// => 3

_.sortedIndexOf(array, 41);
// => -1
```

  </details>

#

  <pre>_.tail(values)</pre>
  <p>Gets everything except the first element of the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.tail([1, 2, 3]);
// => [2, 3]
```

  </details>

#

  <pre>_.take(array, [num=1])</pre>
  <p>Creates a fragment of an array with <code>n</code> elements taken from the beginning.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[num=1</code> <em>(Number)</em>: The number of elements to take.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.take([1, 2, 3]);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => []

_.take([1, 2, 3], -1);
// => []
```

  </details>

#

  <pre>_.takeRight(array, [num=1])</pre>
  <p>Creates a fragment of an array with <code>n</code> elements taken from the end.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[num=1</code> <em>(Number)</em>: The number of elements to take.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Number)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.takeRight([1, 2, 3]);
// => [3]

_.takeRight([1, 2, 3], 2);
// => [2, 3]

_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

_.takeRight([1, 2, 3], 0);
// => []

_.takeRight([1, 2, 3], -1);
// => []
```

  </details>

#

  <pre>_.takeRightWhile(values, [predicate])</pre>
  <p>Creates a fragment of an array with elements taken from the end. Elements are taken until the predicate returns false. The predicate is called with three arguments: (<code>value</code>, <code>index</code>, <code>array</code>). Only <code>value</code> is required, the rest of the predicate arguments are optional.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];

_.takeRightWhile(users, ({ active }) => !active);
// => [{ user: 'Nat', active: false }, { user: 'Den', active: false }]
```

  </details>

#

  <pre>_.takeWhile(values, [predicate])</pre>
  <p>Creates a fragment of an array with elements taken from the beginning. Elements are taken until the predicate returns false. The predicate is called with three arguments: (<code>value</code>, <code>index</code>, <code>array</code>). Only <code>value</code> is required, the rest of the predicate arguments are optional.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to query.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The function called at each iteration.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the slice of array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const users = [
  { user: 'Ben', active: true },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: true },
];

_.takeWhile(users, ({ active }) => active);
// => [{ user: 'Ben', active: true }, { user: 'Vic', active: true }]
```

  </details>

#

  <pre>_.union([...args])</pre>
  <p>Creates a new array of unique values.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>[...args]</code> <em>(...*)</em>: The values to inspect.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of combined values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.union([2], [1, 2, 5, 2]);
// => [2, 1, 5]

_.union(2, 2, 3, 3, 1);
// => [2, 3, 1]

_.union(2, 2, 3, 3, 1, [4], [1]);
// => [2, 3, 1, 4]
```

  </details>

#

  <pre>_.unionBy([...args], [predicate])</pre>
  <p>This method is similar to <code>_.union</code>, except that it uses an iteration that is called for each element of each array to generate a criterion by which uniqueness is calculated. The resulting values are selected from the first array in which this value occurs. Predicate is called with one argument <code>args: T</code></p>

  <h5>Arguments</h5>
  <ol>
    <li><code>[...args]</code> <em>(...*)</em>: The arrays to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of combined values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];
_.unionBy(users, [{ user: 'Nat', active: true }], [{ user: 'Lat', active: false }], ({ active }) => active);
// => [{ user: 'Ben', active: false }, { user: 'Vic', active: true }]
```

  </details>

#

  <pre>_.unionWith([...args], [predicate])</pre>
  <p>This method is similar to <code>_.union</code>, except that it accepts a comparator that is called to compare array elements. Returns only a unique values. Predicate is called with one argument <code>args: T</code></p>

  <h5>Arguments</h5>
  <ol>
    <li><code>[...args]</code> <em>(...*)</em>: The arrays to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of combined values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
const others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

_.unionWith(objects, others, ({ x }) => isEqual(x, 2));
// => [{x: 2, y: 1}]

const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];
_.unionWith(
  users,
  [{ user: 'Nat', active: true }],
  [{ user: 'Nat', active: false }],
  ({ user }) => user.startsWith('N') && user.endsWith('t'),
);
// => [{ user: 'Nat', active: false }, { user: 'Nat', active: true }]
```

  </details>

#

  <pre>_.uniq(values)</pre>
  <p>Creates a version of the array without duplicates, using some null value for equality comparison, in which only the first occurrence of each element is stored. The order of the resulting values is determined by the order in which they appear in the array.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new duplicate free array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.uniq([2, 1, 2]);
// => [2, 1]
```

  </details>

#

  <pre>_.uniqBy(values, [predicate])</pre>
  <p>This method is similar to <code>_.uniq</code>, except that it takes a predicate, which is called for each element in the array to generate a criterion by which uniqueness is calculated. The order of the resulting values is determined by the order in which they appear in the array. Predict is called with a single argument <code>values: T</code></p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new duplicate free array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];
_.uniqBy(users, ({ active }) => active);
// => [{ user: 'Ben', active: false }, { user: 'Vic', active: true }]
```

  </details>

#

  <pre>_.uniqWith(values, [predicate])</pre>
  <p>This method is similar to <code>_.uniq</code>, except that it accepts a comparator that is called to compare array elements. The order of the resulting values is determined by the order in which they appear in the array. Returns only a unique value. Predicate is called with one argument <code>values: T</code></p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new duplicate free array.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

_.uniqWith(objects, ({ y }) => isEqual(y, 2));
// => [{ x: 1, y: 2 }]

const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
  { user: 'Nat', active: true },
  { user: 'Nat', active: false },
];
_.uniqWith(users, ({ user }) => user.startsWith('N') && user.endsWith('t'));
// => [{ user: 'Nat', active: false }, { user: 'Nat', active: true }]
```

  </details>

#

  <pre>_.unzip(values)</pre>
  <p>This method is similar to <code>_.zip</code>, except that it takes an array of grouped elements and creates an array rearranging the elements according to their pre-zip configuration.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array of grouped elements to process.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of regrouped elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
```

  </details>

#

  <pre>_.unzipWith(values, [predicate])</pre>
  <p>This method is similar to <code>_.unzip</code>, except that it takes a predicate to specify how the regrouped values should be combined. Predict is called with the elements of each group <code>...args:T[]</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array of grouped elements to process.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of regrouped elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
const array = zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

_.unzipWith(array, (a, b) => a + b);
// => [3, 30, 300]
```

  </details>

#

  <pre>_.without(values, [args])</pre>
  <p>Creates an array that excludes all specified values.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>values</code> <em>(Array)</em>: The array to inspect.</li>
    <li><code>[args]</code> <em>(...*)</em>: The values to exclude.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```

  </details>

#

  <pre>_.xor([args])</pre>
  <p>Creates an array of unique values, which is the symmetric difference of the specified arrays. The order of the resulting values is determined by the order in which they appear in arrays.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>[args]</code> <em>(...*)</em>: The arrays to inspect.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```

  </details>

#

  <pre>_.xorBy([args], [predicate])</pre>
  <p>This method is similar to <code>_.xor</code>, except that it takes a predicate, which is called for each element of each array to generate a criterion by which they are compared. The order of the resulting values is determined by the order in which they appear in arrays. Predict is called with a single argument <code>args: T</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>[args]</code> <em>(...*)</em>: The arrays to inspect.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]

const users = [
  { user: 'Ben', active: false },
  { user: 'Vic', active: true },
  { user: 'Nat', active: false },
  { user: 'Den', active: false },
];
_.xorBy(
  users,
  [
    { user: 'Nat', active: false },
    { user: 'Vic', active: true },
  ],
  ({ user }) => user,
);
// => [{ user: 'Ben', active: false }, { user: 'Den', active: false }]
```

  </details>

#

  <pre>_.zip([args])</pre>
  <p>Creates an array of grouped elements, the first of which contains the first elements of the specified arrays, the second of which contains the second elements of the specified arrays, and so on.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>args</code> <em>(...*)</em>: The arrays to process.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of grouped elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.zip(['a', 'b'], [1, 2, 3], [true, false]);
// => [['a', 1, true], ['b', 2, false], [undefined, 3, undefined]]
```

  </details>

#

  <pre>_.zipWith([args], [predicate])</pre>
  <p>This method is similar to <code>_.zip</code>, except that it takes a predicate to specify how the grouped values should be combined. Predict is called with the elements of each group <code>...args:T[]</code>.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code>args</code> <em>(...*)</em>: The arrays to process.</li>
    <li><code>[predicate]</code> <em>{Function}</em>: The predicate called for each element.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new array of grouped elements.</li>
  </ol>

  <details>
  <summary><b>Example</b></summary>

```js
_.zipWith([1, 2, 5, 6], [10, 20, 5, 5], [100, 200, 5, 6], (a, b, c) => a + b + c);
// => [111, 222, 15, 17]
```

  </details>

</details>
