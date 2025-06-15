package com.backend.service;

import com.backend.dto.UserDto;
import com.backend.mapper.UserMapper;
import com.backend.model.User;
import com.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public UserDto createUser(User user){
       User saveUser = userRepository.save(user);
       return UserMapper.toDto(saveUser);
    }
}
