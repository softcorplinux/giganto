# Giganto Lib

<details open>
<summary style="font-size:18px; font-weight:bold; color:#5f5f5f;">Array</summary>

  <h4 style="padding:16px; background:#eee; color:#5f5f5f;">_.chunk(array, [size=1])</h4>
  <p>Creates an array of elements divided into groups. The groups are divided into uniform parts that are equal to the length argument. If the array cannot be divided evenly, the last fragment will be the remaining elements.</p>

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
  <summary style="font-size:14px; font-weight:bold; color:#5f5f5f;">Example</summary>
  <p>_.chunk(['a', 'b', 'c', 'd'], 2);</p>
  <p>// => [['a', 'b'], ['c', 'd']]</p>
  
  <p>_.chunk(['a', 'b', 'c', 'd'], 3);</p>
  <p>// => [['a', 'b', 'c'], ['d']]</p>
  </details>
</details>
