package com.nicramitsolutions.phsyncweb.service.utils;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileUtils {
    public static File prepareDir(String path) {
        File dir = new File(path);
        if (!dir.exists())
            dir.mkdirs();
        return dir;
    }

    public static String getFileNameWithoutExtension(String name) {
        if (name.lastIndexOf(".") > 0)
            return name.substring(0, name.lastIndexOf("."));
        return name;
    }

    public static String getExtension(String name) {
        if (name.lastIndexOf(".") > 0)
            return name.substring(name.lastIndexOf("."));
        return name;
    }

    public static String getExtensionOnyText(String name) {
        if (name.lastIndexOf(".") > 0)
            return name.substring(name.lastIndexOf(".")+1);
        return name;
    }


    public static void copyFile(byte[] data, String destination) throws IOException {
        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(destination));
        stream.write(data);
        stream.close();
    }

    public static byte[] readBytes(Path path) throws IOException {
        return Files.readAllBytes(path);
    }
}
