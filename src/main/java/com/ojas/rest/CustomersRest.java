package com.ojas.rest;


import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.ojas.Dao.CustomerDaoImplementation;

@Path("/Customer")
public class CustomersRest {
	
	CustomerDaoImplementation dao=new CustomerDaoImplementation();

	@POST
	@Path("/createproduct/{customerId}/{customerName}/{customerEmail}/{passWord}/{conformPassWord}/{walletAmont}")
	public String createCustomerRest(@PathParam("customerId") int customerId,@PathParam("customerName") String customerName,@PathParam("customerEmail") String customerEmail,@PathParam("passWord") String passWord,
			@PathParam("conformPassWord") String conformPassWord,@PathParam("walletAmont") String walletAmont){
		return dao.createCustomers(customerId, customerName, customerEmail,passWord,conformPassWord,walletAmont);
	}
	
	
	@PUT
	@Path("/update/{customerId}/{customerName}/{customerEmail}/{passWord}/{conformPassWord}/{walletAmont}")
	public String updateCustomeRest(@PathParam("customerId") int customerId,@PathParam("customerName") String customerName,@PathParam("customerEmail") String customerEmail,@PathParam("passWord") String passWord,
	@PathParam("conformPassWord") String conformPassWord,@PathParam("walletAmont") String walletAmont) {
		
		System.out.println("updated method calling");
		return dao.updateCustomer(customerId, customerName, customerEmail,passWord,conformPassWord,walletAmont);
	}
	
}
