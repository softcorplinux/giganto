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

<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto"><pre><span class="pl-c">// Load the full build.</span>
<span class="pl-k">var</span> <span class="pl-s1">_</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// Load the core build.</span>
<span class="pl-k">var</span> <span class="pl-s1">_</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/core'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// Load the FP build for immutable auto-curried iteratee-first data-last methods.</span>
<span class="pl-k">var</span> <span class="pl-s1">fp</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/fp'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-c">// Load method categories.</span>
<span class="pl-k">var</span> <span class="pl-s1">array</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/array'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">object</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/fp/object'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-c">// Cherry-pick methods for smaller browserify/rollup/webpack bundles.</span>
<span class="pl-k">var</span> <span class="pl-s1">at</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/at'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-k">var</span> <span class="pl-s1">curryN</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'lodash/fp/curryN'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">

  </div></div>
  </details>
</details>
