# Types of Lists in HTML

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Types of Lists in HTML</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>HTML List Example</h1>
    <section>
      <h2>Unordered List</h2>
      <ul>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Bananas</li>
      </ul>
    </section>
    <section>
      <h2>Ordered List</h2>
      <ol>
        <li>Wake up</li>
        <li>Brush Teeth</li>
        <li>Have Breakfast</li>
      </ol>
    </section>
    <section>
      <h2>Descriptiton List</h2>
      <dl>
        <dt>HTML</dt>
        <dd>A markup language for web pages.</dd>
        <dt>CSS</dt>
        <dd>A language to style HTML content.</dd>
        <dt>Javascript</dt>
        <dd>A language to add interactivity to websites.</dd>
      </dl>
    </section>
    <section>
      <h2>Nested Lists</h2>
      <ul>
        <li>
          Fruits
          <ul>
            <li>Apple</li>
            <li>Banana</li>
          </ul>
        </li>
        <li>
          Vegtables
          <ul>
            <li>Carrot</li>
            <li>Spinach</li>
          </ul>
        </li>
      </ul>
    </section>
  </body>
</html>
```

## CSS

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  line-height: 1.6;
}
h1 {
  color: #333;
}
section {
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid#ddd;
  border-radius: 6px;
}
ul,
ol,
dl {
  margin-left: 20px;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 20px;
  margin-bottom: 10px;
}
```
