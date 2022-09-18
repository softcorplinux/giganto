# Giganto Lib

<details>
<summary style="font-size:14px">_.chunk(array, [size=1])</summary>
<p>
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.</p>

<p>
Arguments</p>
<p>array (Array): The array to process.</p>
<p>[size=1] (number): The length of each chunk</p>
<p>Returns</p>
<p>(Array): Returns the new array of chunks.</p>

<details>
<summary style="font-size:14px">Example</summary>

<p>_.chunk(['a', 'b', 'c', 'd'], 2);</p>
<p>// => [['a', 'b'], ['c', 'd']]</p>
 
<p>_.chunk(['a', 'b', 'c', 'd'], 3);</p>
<p>// => [['a', 'b', 'c'], ['d']]</p>
</details>
</details>
