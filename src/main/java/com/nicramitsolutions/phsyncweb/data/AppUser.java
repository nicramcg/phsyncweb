package com.nicramitsolutions.phsyncweb.data;

import javax.persistence.*;

@Entity
public class AppUser {
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;

    public AppUser() {
    }

    @Id
    @Column(name = "id")
    @SequenceGenerator(allocationSize = 1, name = "s_app_user", sequenceName = "s_app_user")
    @GeneratedValue(generator = "s_app_user")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
