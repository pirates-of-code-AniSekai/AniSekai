package com.anisekai.aoo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface WatchListRepository extends CrudRepository<WatchList,Integer> {

    List<WatchList> getWatchListByUserId(Integer userId);
}
