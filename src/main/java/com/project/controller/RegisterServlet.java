package com.project.controller;

import com.project.dao.UserDAO;
import com.project.model.User;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        User user = new User(0, name, email, password);

        UserDAO dao = new UserDAO();
        dao.registerUser(user);

        response.sendRedirect("login.jsp");
    }
}
