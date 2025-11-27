package com.project.controller;

import com.project.dao.MusicDAO;
import com.project.model.MusicFile;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.InputStream;

public class UploadServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Part filePart = request.getPart("musicfile");
        String fileName = filePart.getSubmittedFileName();
        InputStream fileContent = filePart.getInputStream();

        HttpSession session = request.getSession();
        int userId = ((com.project.model.User) session.getAttribute("user")).getId();

        MusicFile music = new MusicFile(0, userId, fileName, fileContent);

        MusicDAO dao = new MusicDAO();
        dao.uploadMusic(music);

        response.sendRedirect("dashboard.jsp");
    }
}
