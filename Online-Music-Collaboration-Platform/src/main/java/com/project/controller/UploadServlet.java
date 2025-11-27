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

        if (!uploadDir.exists()) uploadDir.mkdir();

        filePart.write(uploadPath + fileName);

        MusicFile mf = new MusicFile();
        mf.setFileName(fileName);
        mf.setFilePath("uploads/" + fileName);
        // If user in session, set uploadedBy accordingly. For now set as 'guest'
        mf.setUploadedBy("guest");

        MusicDAO dao = new MusicDAO();
        dao.saveFile(mf);

        res.sendRedirect("dashboard.jsp");
    }
}
