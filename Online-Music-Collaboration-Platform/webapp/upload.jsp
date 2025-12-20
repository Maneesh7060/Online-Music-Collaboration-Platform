<!DOCTYPE html>
<html>
<head>
    <title>Upload Music</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>

<h2>Upload Music File</h2>
<form action="UploadServlet" method="post" enctype="multipart/form-data">
    Select File: <input type="file" name="musicFile"><br><br>
    <button type="submit">Upload</button>
</form>

</body>
</html>
