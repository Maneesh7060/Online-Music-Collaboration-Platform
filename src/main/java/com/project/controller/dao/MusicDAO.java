package com.project.dao;

import com.project.model.MusicFile;

import java.sql.*;
import java.io.InputStream;

public class MusicDAO {

    public int uploadMusic(MusicFile music) {
        int result = 0;

        try {
            Connection conn = DBConnection.getConnection();
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO musicfiles(user_id, filename, filedata) VALUES (?,?,?)"
            );

            ps.setInt(1, music.getUserId());
            ps.setString(2, music.getFileName());
            ps.setBlob(3, music.getFileData());

            result = ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }
}
