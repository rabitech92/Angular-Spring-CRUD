package com.backend.controller;

import com.backend.dto.UserDto;
import com.backend.model.User;
import com.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class UserController {

    private final UserService userService ;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/")
    public UserDto createUser(@RequestBody User user){
        return userService.createUser(user);
    }
}
