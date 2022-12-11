package com.ojas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Customer")
public class Customer {

	@Id
//	@GeneratedValue
	public int customerId;
	public String customerName;
	public String customerEmail;
	public String passWord;
	public String conformPassWord;
	public String walletAmont;
	

	public Customer() {
		
	}
	

	public Customer(int customerId, String customerName, String customerEmail, String passWord,
			String conformPassWord,String walletAmont) {
	
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.passWord = passWord;
		this.conformPassWord = conformPassWord;
		this.walletAmont = walletAmont;
	}
	
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getConformPassWord() {
		return conformPassWord;
	}
	public void setConformPassWord(String conformPassWord) {
		this.conformPassWord = conformPassWord;
	}
	
	public String getWalletAmont() {
		return walletAmont;
	}


	public void setWalletAmont(String walletAmont) {
		this.walletAmont = walletAmont;
	}


	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerEmail="
				+ customerEmail + ", passWord=" + passWord + ", conformPassWord=" + conformPassWord + ", walletAmont="
				+ walletAmont + "]";
	}
	
	
}
