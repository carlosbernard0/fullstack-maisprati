package com.example.api_user.service;

import com.example.api_user.dto.UserDTO;
import com.example.api_user.model.UserEntity;
import com.example.api_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers(){
        return userRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(int id){
        Optional<UserEntity> user = userRepository.findById(id);
        return user.map(this::convertToDTO).orElse(null);
    }

    public UserDTO createUser(UserDTO userDTO){
        UserEntity userEntity =  new UserEntity();
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setMail(userDTO.getMail());
        userEntity.setRole(userDTO.getRole());

        userRepository.save(userEntity);

        return convertToDTO(userEntity);
    }

    public UserDTO updateUser(int id, UserDTO userDTO){
        Optional<UserEntity> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()){
            UserEntity userEntity= userOptional.get();
            userEntity.setUserName(userDTO.getUserName());
            userEntity.setMail(userDTO.getMail());
            userEntity.setRole(userDTO.getRole());
            userRepository.save(userEntity);
            return convertToDTO(userEntity);
        }

        return null;
    }

    public void deleteUser(int id){
        userRepository.deleteById(id);
    }



    private UserDTO convertToDTO(UserEntity user){
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(user.getId());
        userDTO.setUserName(user.getUserName());
        userDTO.setMail(user.getMail());
        userDTO.setRole(user.getRole());

        return userDTO;
    }

}


