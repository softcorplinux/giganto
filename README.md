# Giganto Lib

<details open>
<summary>
  <h3 style="font-size:18px; font-weight:bold; color:#5f5f5f;">Array</h3>
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
  <p>
    <pre>_.chunk(['a', 'b', 'c', 'd'], 2);
<em>// => [['a', 'b'], ['c', 'd']]</em><br />

\_.chunk(['a', 'b', 'c', 'd'], 3);
<em>// => [['a', 'b', 'c'], ['d']]</em></pre>

  </p>

  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">lodash.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></pre>
  </details>
</details>
