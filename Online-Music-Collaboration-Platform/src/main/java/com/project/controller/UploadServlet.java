package com.project.controller;

import com.project.dao.MusicDAO;
import com.project.model.MusicFile;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;

@WebServlet("/UploadServlet")
@MultipartConfig
public class UploadServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        Part filePart = req.getPart("musicFile");
        String fileName = filePart.getSubmittedFileName();

        String uploadPath = getServletContext().getRealPath("") + File.separator + "uploads" + File.separator;
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }

        filePart.write(uploadPath + fileName);

        MusicDAO dao = new MusicDAO();
        int newVersion = dao.getLatestVersion(fileName) + 1;

        MusicFile mf = new MusicFile();
        mf.setFileName(fileName);
        mf.setFilePath("uploads/" + fileName);
        mf.setVersion(newVersion);
        mf.setUploadedBy("guest");

        dao.saveFile(mf);

        res.sendRedirect("dashboard.jsp");
    }
}
