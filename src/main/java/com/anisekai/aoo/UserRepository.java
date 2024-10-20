package com.anisekai.aoo;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {

    User findUserByusername(String username);
}
