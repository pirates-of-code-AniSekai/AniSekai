package com.anisekai.aoo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "authorities")
@Getter
@Setter
public class Authorities {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "authority")
    private String authority;
}
