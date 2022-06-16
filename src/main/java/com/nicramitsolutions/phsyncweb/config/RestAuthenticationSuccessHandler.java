package com.nicramitsolutions.phsyncweb.config;


import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;


@Component
public class RestAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Autowired
    private AppUserService userService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response, Authentication authentication)
            throws ServletException, IOException {
        Optional<AppUser> userOpt = userService.findByUsername(authentication.getName());
        AppUser user = null;
        if (userOpt.isPresent())
            user = userOpt.get();
        SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, user);
    }
}