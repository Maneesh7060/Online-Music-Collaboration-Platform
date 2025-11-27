package com.project.controller;

import com.project.dao.UserDAO;
import com.project.model.User;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String email = req.getParameter("email");
        String password = req.getParameter("password");

        UserDAO dao = new UserDAO();
        User user = dao.loginUser(email, password);

        if (user != null) {
            HttpSession session = req.getSession();
            session.setAttribute("user", user);
            res.sendRedirect("dashboard.jsp");
        } else {
            res.getWriter().println("Invalid Login!");
        }
    }
}
