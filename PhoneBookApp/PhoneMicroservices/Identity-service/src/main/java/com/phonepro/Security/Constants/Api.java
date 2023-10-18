package com.phonepro.Security.Constants;

import java.util.Arrays;
import java.util.List;

public class Api {

    public static final String DEFAULT = "http://localhost:8383";
    public static final String ENTRY = "/user/entry";
    public static final String USER = "/user";
    public static final String CONTACT = "/contact";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000", "http://localhost:3001", "http://localhost:3002");
}