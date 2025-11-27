package com.project.dao;

import com.project.model.MusicFile;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MusicDAO {

    public boolean saveFile(MusicFile file) {
        try {
            Connection conn = DBConnection.getConnection();
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO musicfiles(filename, filepath, uploadedBy) VALUES (?, ?, ?)");

            ps.setString(1, file.getFileName());
            ps.setString(2, file.getFilePath());
            ps.setString(3, file.getUploadedBy());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public List<MusicFile> getAllFiles() {
        List<MusicFile> list = new ArrayList<>();

        try {
            Connection conn = DBConnection.getConnection();
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM musicfiles");

            while (rs.next()) {
                MusicFile mf = new MusicFile();
                mf.setId(rs.getInt("id"));
                mf.setFileName(rs.getString("filename"));
                mf.setFilePath(rs.getString("filepath"));
                mf.setUploadedBy(rs.getString("uploadedBy"));
                list.add(mf);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
