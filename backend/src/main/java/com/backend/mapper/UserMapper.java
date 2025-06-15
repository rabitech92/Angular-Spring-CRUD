package com.backend.mapper;

import com.backend.dto.UserDto;
import com.backend.model.User;

public class UserMapper {

    public static User toModel(UserDto userDto){
        User.builder()
                .useName(userDto.getUseName())
                .email(userDto.getEmail())
                .password(userDto.getPassword())
                .build();
        return new User();

    }
    public static UserDto toDto(User user){
        UserDto.builder()
                .useName(user.getUseName())
                .email(user.getEmail())
                .password(user.getPassword())
                .build();
        return new UserDto();
    }
}
