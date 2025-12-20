package com.project.controller;

import com.project.dao.UserDAO;
import com.project.model.User;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        User u = new User();
        u.setName(req.getParameter("name"));
        u.setEmail(req.getParameter("email"));
        u.setPassword(req.getParameter("password"));

        UserDAO dao = new UserDAO();
        boolean saved = dao.registerUser(u);

        if (saved) {
            res.sendRedirect("login.jsp");
        } else {
            res.getWriter().println("Registration Failed!");
        }
    }
}
