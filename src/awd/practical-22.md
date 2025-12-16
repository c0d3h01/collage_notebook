# CSS Selectors (Element, Class, ID)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS SELECTORS DEMO</title>
    <link rel="stylesheet" href="prac22.css" />
  </head>
  <body>
    <h1>Welcome to CSS Selector Demo</h1>
    <p>This paragraph is styled using an <strong>element selector</strong>.</p>
    <div class="box">
      This box is styled using a <strong>class selector</strong>.
    </div>
    <p id="highlight">
      This paragraph is styled using an <strong>ID selector</strong>.
    </p>
  </body>
</html>
```

```css
p {
  color: navy;
  font-size: 16px;
}
.box {
  background-color: lightblue;
  padding: 10px;
  border: 2px solid steelblue;
  width: 300px;
  margin-top: 10px;
}
#highlight {
  background-color: yellow;
  color: darkred;
  font-weight: bold;
  padding: 10px;
}
```
