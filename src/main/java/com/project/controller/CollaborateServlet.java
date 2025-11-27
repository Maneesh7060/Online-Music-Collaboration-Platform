package com.project.controller;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class CollaborateServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.sendRedirect("collaborate.jsp");
    }
}
