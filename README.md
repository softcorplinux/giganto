# Giganto

<details open>
<summary>
  <h2 style="font-size:18px; font-weight:bold; color:#5f5f5f;">Array</h2>
</summary>

  <h4 style="padding:16px; background:#eee; color:#5f5f5f;">_.chunk(array, [size=1])</h4>
  <p>Creates an array of elements divided into groups. The groups are divided into uniform parts that are equal to the argument <code>[length=1]</code>. If the array cannot be divided evenly, the last fragment will be the remaining elements.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code style="color:#3492ff;">array</code> <em style="color:#3492ff;">(Array)</em>: The array to process.</li>
    <li><code style="color:#3492ff;">[length=1]</code> <em style="color:#3492ff;">(number)</em>: The length of each chunk</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em style="color:#3492ff;">(Array)</em>: Returns the new array of chunks.</li>
  </ol>

  <details>
  <summary style="font-size:14px; font-weight:bold; color:#5f5f5f;"><h5>Example</h5></summary>

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

  </details>

#

  <h4 style="padding:16px; background:#eee; color:#5f5f5f;">_.compact(array)</h4>
  <p>Creates a new array and removes all false values from it. The values <code>false</code>, <code>null</code>, <code>""</code>, <code>undefined</code> and <code>NaN</code> are false. Note that the value <code>0</code> is not false.</p>

  <h5>Arguments</h5>
  <ol>
    <li><code style="color:#3492ff;">array</code> <em style="color:#3492ff;">(Array)</em>:The array to compact.</li>
  </ol>
  <h5>Returns</h5>
    <ol>
    <li><em style="color:#3492ff;">(Array)</em>: Returns the new array of filtered values.</li>
  </ol>

  <details>
  <summary style="font-size:14px; font-weight:bold; color:#5f5f5f;"><h5>Example</h5></summary>

```js
_.compact([0, 1, false, 2, '', 3, NaN, 4, undefined, 5, 6, Boolean(0)]);
// => [0, 1, 2, 3, 4, 5, 6]
```

  </details>
</details>
