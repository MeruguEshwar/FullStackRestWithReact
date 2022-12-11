package com.ojas.rest;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import com.ojas.Dao.CustomerDao;
import com.ojas.Dao.ItemDaoImpl;

@Path("/Items")
public class ItemsRest {
	
	CustomerDao dao = new CustomerDao();

	@POST
	@Path("/addproduct/{itemName}/{itemPrice}/{resturantName}/{resturantAddress}/{image}")
	public String createItemsRest(@PathParam("itemName") String itemName,@PathParam("itemPrice") String itemPrice,@PathParam("resturantName") String resturantName,
			@PathParam("resturantAddress") String resturantAddress,@PathParam("image") byte[] image){
		return dao.AddItems(itemName, itemPrice,resturantName,resturantAddress,image);
	}
}
