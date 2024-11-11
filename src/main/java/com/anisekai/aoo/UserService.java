package com.anisekai.aoo;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            String username = ((UserDetails) principal).getUsername();
            // Replace with actual logic to retrieve user details from the database
            return userRepository.findUserByusername(username);
        } else {
            return null;
        }
    }

    public User createUser(User user) {
//        user.setPassword();
        return userRepository.save(user);
    }
}