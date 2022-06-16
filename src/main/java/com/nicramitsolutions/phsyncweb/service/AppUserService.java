package com.nicramitsolutions.phsyncweb.service;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.data.UserRole;
import com.nicramitsolutions.phsyncweb.data.dto.TokenDto;
import com.nicramitsolutions.phsyncweb.data.dto.UserRegistrationDto;
import com.nicramitsolutions.phsyncweb.exception.RestExceptionBuilder;
import com.nicramitsolutions.phsyncweb.exception.message.EM400;
import com.nicramitsolutions.phsyncweb.repository.AppUserRepository;
import com.nicramitsolutions.phsyncweb.repository.AppUserTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

public class AppUserService implements UserDetailsService {
    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AppUserTokenRepository appUserTokenRepository;

    @Autowired
    private CurrentUserService currentUserService;

    public void addUser(AppUser user) {
        if (appUserRepository.findTop1ByUserNameIgnoreCase(user.getUserName()) == null) {
            appUserRepository.save(user);
        }
    }

    public AppUser save(UserRegistrationDto registrationDto) {
        if (appUserRepository.findTop1ByUserNameIgnoreCase(registrationDto.getUserName()) != null) {
            throw RestExceptionBuilder.build(EM400.USER_ALREADY_EXISTS);
        }
        AppUser user = new AppUser();
        user.setEmail(registrationDto.getEmail());
        user.setUserName(registrationDto.getUserName());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setRoles(Arrays.asList(new UserRole("ROLE_USER")));
        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setAssignedToken(createNewToken());
        return appUserRepository.save(user);
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = appUserRepository.findTop1ByUserNameIgnoreCase(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<UserRole> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public Optional<AppUser> findByUsername(String username) {
        AppUser appUser = appUserRepository.findTop1ByUserNameIgnoreCase(username);
        return Optional.ofNullable(appUser);
    }

    public String createNewToken() {
        UUID uuid = UUID.randomUUID();
        String code = uuid.toString().replaceAll("-", "");
        while (appUserTokenRepository.countAllByToken(code).compareTo(0L) != 0) {
            uuid = UUID.randomUUID();
            code = uuid.toString();
        }
        return code;
    }

    public TokenDto currentUserGetAssignedToken() {
        TokenDto tokenDto = new TokenDto();
        AppUser currentUser = currentUserService.currentUser();
        if (currentUser == null) {
            return tokenDto;
        }
        tokenDto.setToken(currentUser.getAssignedToken());
        return tokenDto;
    }
}
