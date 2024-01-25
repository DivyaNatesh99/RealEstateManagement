package com.Manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Manager.Entity.Manager;

@Repository

public interface ManagerRepo extends JpaRepository<Manager, Integer> {

}
