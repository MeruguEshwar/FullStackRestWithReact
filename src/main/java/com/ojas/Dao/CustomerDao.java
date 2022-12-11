package com.ojas.Dao;

import java.util.List;

import com.ojas.model.Customer;

public interface CustomerDao {

	public String createCustomers(int customerId, String customerName, String customerEmail, String passWord,
			String conformPassWord, String walletAmont);

	public String updateCustomer(int customerId, String customerName, String customerEmail, String passWord,
			String conformPassWord, String walletAmont);

	public String AddItems(String itemName, String itemPrice, String resturantName, String resturantAddress,
			byte[] image);

}
