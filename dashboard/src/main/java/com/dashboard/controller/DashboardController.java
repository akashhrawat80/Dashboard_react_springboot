package com.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.Model.MyData;
import com.dashboard.service.DashboardService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class DashboardController {
	
	@Autowired
	private DashboardService dashboardService;
	
	@GetMapping("/data")
	public ResponseEntity<List<MyData>> getAllData(){
		return new ResponseEntity<List<MyData>>(dashboardService.getAllDataService(),HttpStatus.OK);
	}
	
	
}
