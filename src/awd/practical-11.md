# CSS Combinators Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Combinators Example</title>
    <link rel="stylesheet" type="text/css" href="prac11.css" />
  </head>
  <body>
    <h1>CSS Combinators Demo</h1>
    <div>
      <p>This paragraph is inside a div. (Descendant Combinator)</p>
      <span
        >This span is also inside the same div. (Descendant Combinator)</span
      >
    </div>
    <h2>Sibling Elements</h2>
    <p>This is a paragraph directly after h2. (Adjacent sibling Combinator)</p>
    <p>This is another paragraph. (General Sibling Combinator)</p>
    <p>This is yet another paragraph. (General Sibling Combinator)</p>
  </body>
</html>
```

```css
div p {
  color: green;
  font-weight: bold;
}
div span {
  color: blue;
  font-style: italic;
}
h2 + p {
  background-color: yellow;
  padding: 10px;
  border: 1px solid black;
}
h2 ~ p {
  font-size: 18px;
  color: darkred;
}
```
