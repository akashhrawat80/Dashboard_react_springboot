package com.dashboard.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.Model.MyData;
import com.dashboard.repository.DashboardRepository;

@Service
public class DashboardService {
	
	
	@Autowired
	private DashboardRepository dashboardRepository;
	
	public List<MyData> getAllDataService(){
		System.out.println("hey this akash from service");
		return dashboardRepository.findAll();
	}
	
}
