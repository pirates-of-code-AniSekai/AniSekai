package com.anisekai.aoo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Map;

@Controller
public class ProxyController {

    private final RestTemplate restTemplate = new RestTemplate();

    @RequestMapping(value = "/proxy", method = {RequestMethod.GET})
    public ResponseEntity<?> forwardRequest(
            @RequestParam("url") String url,
            @RequestBody(required = false) String body,
            @RequestHeader Map<String, String> headers,
            HttpMethod method
    ) {


        // Forward the headers (you might need to add specific ones)
        HttpHeaders proxyHeaders = new HttpHeaders();
        proxyHeaders.setAll(headers);
        proxyHeaders.set(HttpHeaders.USER_AGENT, "YourDefaultUserAgent/1.0");
        proxyHeaders.remove(HttpHeaders.ACCEPT_ENCODING); // Prevent encoding issues

        // Send the request and get the response
        HttpEntity<String> requestEntity = new HttpEntity<>(body, proxyHeaders);
        ResponseEntity<byte[]> response = restTemplate.exchange(url, method, requestEntity, byte[].class);

        // Set response headers to match those from the upstream server
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setAll(response.getHeaders().toSingleValueMap());

        // Add CORS headers (only if needed)
        responseHeaders.add("Access-Control-Allow-Origin", "*");
        responseHeaders.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        responseHeaders.add("Access-Control-Allow-Headers", "Content-Type, Authorization");

        // Check for image content-type and return as byte[] for binary files (like images)
        MediaType contentType = response.getHeaders().getContentType();
        if (contentType != null && contentType.equals(MediaType.IMAGE_JPEG)) {
            return ResponseEntity.status(response.getStatusCode())
                                 .headers(responseHeaders)
                                 .contentType(contentType)
                                 .body(response.getBody());
        } else {
            // Handle other response types as needed
            return ResponseEntity.status(response.getStatusCode())
                                 .headers(responseHeaders)
                                 .contentType(contentType)
                                 .body(new String(response.getBody(), StandardCharsets.UTF_8));
        }
    }
}
