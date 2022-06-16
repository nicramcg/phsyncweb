package com.nicramitsolutions.phsyncweb.data;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class AppUser {
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private Collection<UserRole> roles;
    private String password;
    private String assignedToken;


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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "app_user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "user_role_id", referencedColumnName = "id"))
    public Collection<UserRole> getRoles() {
        return roles;
    }

    public void setRoles(Collection<UserRole> roles) {
        this.roles = roles;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAssignedToken() {
        return assignedToken;
    }

    public void setAssignedToken(String assignedToken) {
        this.assignedToken = assignedToken;
    }
}
