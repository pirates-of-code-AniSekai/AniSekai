package com.anisekai.aoo;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class WatchListController {

    private final WatchListRepository watchListRepository;

    public WatchListController(WatchListRepository watchListRepository) {
        this.watchListRepository = watchListRepository;
    }

    @GetMapping("/watchlist/{userId}")
    public List<WatchList> getByUserId(@PathVariable Integer userId) {
        return watchListRepository.getWatchListByUserId(userId);
    }

    @PostMapping("/watchlist")
    public WatchList create(@RequestBody WatchList watchList) {
        System.out.println();
        return watchListRepository.save(watchList);
    }

    @DeleteMapping("/watchlist/{id}")
    public void delete(@PathVariable int id) {
        watchListRepository.deleteById(id);
    }
}
