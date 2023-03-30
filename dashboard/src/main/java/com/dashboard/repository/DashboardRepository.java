package com.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dashboard.Model.MyData;

@Repository
public interface DashboardRepository extends JpaRepository<MyData, Integer>{
}
