# Giganto

<details open>
<summary>
  <h2>Array</h2>
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
  <summary><h5>Example</h5></summary>

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
  <summary><h5>Example</h5></summary>

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
    <li><code>[args]</code> <em>(...*)</em>: The values to concatenate.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em>(Array)</em>: Returns the new concatenated array.</li>
  </ol>

  <details>
  <summary><h5>Example</h5></summary>

```js
const array = [1, { user: 'Vic' }];

_.concat(array, 2, [3], [[4]], { user: 'Nat' });
// => [1, { user: 'Vic' }, 2, [3], [[4]], { user: 'Nat' }]

console.log(array);
// => [1, { user: 'Vic' }]
```

  </details>
</details>
