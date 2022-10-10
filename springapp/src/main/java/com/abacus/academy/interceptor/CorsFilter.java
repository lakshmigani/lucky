package com.abacus.academy.interceptor;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;

@Configuration
public class CorsFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		//TODO whitelisting/blacklisting
		HttpServletRequest httpReq=(HttpServletRequest) request;
		HttpServletResponse httpRes=(HttpServletResponse) response;
		httpRes.setHeader("Access-Control-Allow-Origin", httpReq.getHeader("Origin"));
		httpRes.setHeader("Access-Control-Allow-Credentials", "true");
		httpRes.setHeader("Access-Control-Allow-Methods", "POST, GET");
		httpRes.setHeader("Access-Control-Allow-Max-Age", "3600");
		httpRes.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept , X-Requested-Width , remember-me ,active , sessionId");
		httpRes.setHeader("Access-Control-Expose-Headers", "active , sessionId");
		chain.doFilter(httpReq, httpRes);
	}
	
	@Override
	public void init(FilterConfig filterConfig) {
		//initialize method
	}
	
	@Override
	public void destroy() {
		//destroy method
	}
}
