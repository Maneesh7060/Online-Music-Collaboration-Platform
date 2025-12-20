package com.project.dao;

import com.project.model.MusicFile;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MusicDAO {
    public int getLatestVersion(String filename) {
        int version = 0;
        try {
            Connection conn = DBConnection.getConnection();
            PreparedStatement ps =
                conn.prepareStatement("SELECT MAX(version) FROM musicfiles WHERE filename=?");
            ps.setString(1, filename);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                version = rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return version;
    }
    public boolean saveFile(MusicFile file) {
        try {
            Connection conn = DBConnection.getConnection();
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO musicfiles(filename, filepath, version, uploadedBy) VALUES (?, ?, ?, ?)");

            ps.setString(1, file.getFileName());
            ps.setString(2, file.getFilePath());
            ps.setInt(3, file.getVersion());  
            ps.setString(4, file.getUploadedBy());

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
            ResultSet rs = st.executeQuery("SELECT * FROM musicfiles ORDER BY uploaded_at DESC");

            while (rs.next()) {
                MusicFile mf = new MusicFile();
                mf.setId(rs.getInt("id"));
                mf.setFileName(rs.getString("filename"));
                mf.setFilePath(rs.getString("filepath"));
                mf.setVersion(rs.getInt("version"));   
                mf.setUploadedBy(rs.getString("uploadedBy"));
                list.add(mf);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
