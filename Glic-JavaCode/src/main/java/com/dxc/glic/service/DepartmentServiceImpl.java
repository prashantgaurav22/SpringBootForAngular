package com.dxc.glic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.dxc.glic.entity.Department;
import com.dxc.glic.repository.DepartmentRepository;

@CrossOrigin
@Service
public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private DepartmentRepository deptRepo;

	@Override
	public Department getDeptId(int deptId) {
		return deptRepo.findById(deptId).orElse(null);
	}

}
