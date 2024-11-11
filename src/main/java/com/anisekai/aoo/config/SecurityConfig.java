package com.anisekai.aoo.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


    @Bean
    UserDetailsManager users(DataSource dataSource) {
        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
        return users;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .authorizeHttpRequests((auth) -> auth
//                        .requestMatchers("/Icons/**").permitAll()
//                        .requestMatchers("/home.css","/styleani.css","/home.js","/scriptani.js").permitAll()
//                        .requestMatchers("/login").permitAll()
//                        .requestMatchers("/proxy/**").permitAll()
//                        .anyRequest().authenticated()
                                .anyRequest().permitAll()
                )
                .formLogin(form -> form
                        .loginPage("/anisekai.html").permitAll()
                        .loginProcessingUrl("/login")
                        .defaultSuccessUrl("/home.html")
                        .defaultSuccessUrl("/home",true)

                ).logout(out -> out
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/anisekai.html")
                        .permitAll()
                )
//               .formLogin(Customizer.withDefaults())
                .csrf((csrf) -> csrf.disable());


        return http.build();
    }


}
