package com.anisekai.aoo;

import com.anisekai.aoo.config.AuthoritiesRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;
    private final AuthoritiesRepository authoritiesRepository;

    public UserController(UserService userService, AuthoritiesRepository authoritiesRepository) {
        this.userService = userService;
        this.authoritiesRepository = authoritiesRepository;
    }

    @GetMapping("/user")
    public User getUser() {
        return userService.getCurrentUser();
    }

    @PostMapping("/register")
    public  User createUser(@RequestBody User user) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword("{bcrypt}" + encoder.encode(user.getPassword()));
        user.setEnabled(true);
        User saved = userService.createUser(user);
        Authorities authorities = new Authorities();
        authorities.setUsername(saved.getUsername());
        authorities.setAuthority("ROLE_USER");
        authoritiesRepository.save(authorities);
        return saved;
    }
}
