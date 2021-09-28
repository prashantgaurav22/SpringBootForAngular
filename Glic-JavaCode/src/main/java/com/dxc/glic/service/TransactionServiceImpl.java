package com.dxc.glic.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.dxc.glic.entity.Transaction;
import com.dxc.glic.repository.TransactionRepository;

@CrossOrigin
@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionRepository transRepo;

	@Override
	public Transaction getTransId(int transId) {
		return transRepo.findById(transId).orElse(null);
	}
	
	@Transactional
	@Override
	public void addTrans(Transaction obj) {
		transRepo.save(obj);
		
	}

	@Override
	public Transaction getByDateTime(int empId) {
		return transRepo.getByDateTime(empId);
	}
}
