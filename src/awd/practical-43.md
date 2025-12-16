# File Upload Form

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Upload Form</title>
    <link rel="stylesheet" type="text/css" href="prac43.css" />
  </head>
  <body>
    <h1>Upload Your Info</h1>
    <form action="#" method="post" enctype="multipart/form-data">
      <label for="name">Name:</label>
      <input type="text" id="name" name="username" required /><br /><br />
      <label for="file">Upload File:</label>
      <input type="file" id="file" name="uploaded_file" required /><br /><br />
      <label for="website">Website URL:</label>
      <input
        type="url"
        id="website"
        name="website"
        placeholder="[https://example.com](https://example.com)"
      /><br /><br />
      <input type="submit" value="Search" />
    </form>
  </body>
</html>
```

## Styles

```css
body {
  background-color: #f0f8ff;
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 50px;
}
h1 {
  color: #333cc;
}
form {
  display: inline-block;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  text-align: left;
}
label {
  font-weight: bold;
}
input[type="text"],
input[type="file"],
input[type="url"] {
  width: 100%;
  padding: 8px;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}
input[type="submit"] {
  background-color: #333cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #000099;
}
```
