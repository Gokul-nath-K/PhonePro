package com.phonepro.Gateway.filter;

import com.phonepro.Gateway.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {

        return ((exchange, chain) -> {

            if (validator.isSecured.test(exchange.getRequest())) {



                String authHeader =  "";
                try {

                    if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                        throw new RuntimeException("missing authorization header");
                    }

                    authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                }
                catch(Exception e) {

                    throw new RuntimeException(e.getMessage());
                }
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }
                try {

                    jwtUtil.validateToken(authHeader);

                } catch (Exception e) {

                    System.out.println("invalid access...!");
                    throw new RuntimeException(e.getMessage());
                }
            }

            return chain.filter(exchange);
        });
    }

    public static class Config {

    }
}
