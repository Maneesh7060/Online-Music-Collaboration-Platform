package com.project.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet("/CollaborateServlet")
public class CollaborateServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        res.sendRedirect("collaborate.jsp");
    }
}
