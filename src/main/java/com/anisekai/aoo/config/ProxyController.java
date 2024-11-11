package com.anisekai.aoo.config;

import java.io.InputStream;
import java.net.URL;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProxyController {

    @GetMapping("/cover-image")
    public ResponseEntity<InputStreamResource> getCoverImage(@RequestParam String mangaId, @RequestParam String fileName) {
        String imageUrl = String.format("https://uploads.mangadex.org/covers/%s/%s",mangaId,fileName);

        try {
            URL url = new URL(imageUrl);
            InputStream inputStream = url.openStream();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            return ResponseEntity.ok().headers(headers).body(new InputStreamResource(inputStream));
        } catch (Exception ex) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/proxy/video")
    public ResponseEntity<InputStreamResource> proxyVideo(@RequestParam String url) {
        try {
            URL videoUrl = new URL(url);
            InputStream inputStream = videoUrl.openStream();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            return ResponseEntity.ok().headers(headers).body(new InputStreamResource(inputStream));
        } catch (Exception ex) {
            return ResponseEntity.status(404).body(null);
        }
    }
}
