package com.mohan.portfolio.contact;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final List<ContactMessage> messages = new CopyOnWriteArrayList<>();

    @PostMapping("/contact")
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse contact(@Valid @RequestBody ContactRequest request) {
        messages.add(new ContactMessage(request.name(), request.email(), request.message(), Instant.now()));
        return new ApiResponse("Message received");
    }

    @GetMapping("/health")
    public ApiResponse health() {
        return new ApiResponse("Portfolio API is running");
    }

    public record ApiResponse(String message) {}
    private record ContactMessage(String name, String email, String message, Instant receivedAt) {}
}
