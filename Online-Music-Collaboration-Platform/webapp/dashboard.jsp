<%@ page import="java.util.*, com.project.dao.MusicDAO, com.project.model.MusicFile" %>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>

<h2>Welcome to Dashboard</h2>
<a href="upload.jsp">Upload Music</a> |
<a href="collaborate.jsp">Collaborate</a>

<h3>Your Uploaded Files</h3>
<ul>
    <%
        MusicDAO dao = new MusicDAO();
        List<MusicFile> files = dao.getAllFiles();
        for(MusicFile f : files) {
    %>
        <li><a href="<%= f.getFilePath() %>"><%= f.getFileName() %></a> - uploaded by <%= f.getUploadedBy() %></li>
    <%
        }
        if(files.size() == 0) {
    %>
        <li>No files yet</li>
    <%
        }
    %>
</ul>

</body>
</html>
