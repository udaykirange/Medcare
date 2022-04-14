package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
	
	@Query("select h from Hospital h where login.lid= :id")
	public Object getObject(int id);
}
