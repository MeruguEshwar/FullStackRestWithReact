package com.ojas.model;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FoodItems {
	
	@Id
	@GeneratedValue
	private int itemId;
	private String itemName;
	private String itemPrice;
	private String resturantName;
	private String resturantAddress;
	private byte[] image;
	
	public FoodItems() {
		
	}
	
	
	public FoodItems(int itemId, String itemName, String itemPrice, String resturantName, String resturantAddress,
			byte[] image) {
		this.itemId = itemId;
		this.itemName = itemName;
		this.itemPrice = itemPrice;
		this.resturantName = resturantName;
		this.resturantAddress = resturantAddress;
		this.image = image;
	}




	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getItemPrice() {
		return itemPrice;
	}
	public void setItemPrice(String itemPrice) {
		this.itemPrice = itemPrice;
	}
	public String getResturantName() {
		return resturantName;
	}
	public void setResturantName(String resturantName) {
		this.resturantName = resturantName;
	}
	public String getResturantAddress() {
		return resturantAddress;
	}
	public void setResturantAddress(String resturantAddress) {
		this.resturantAddress = resturantAddress;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	@Override
	public String toString() {
		return "FoodItems [itemId=" + itemId + ", itemName=" + itemName + ", itemPrice=" + itemPrice
				+ ", resturantName=" + resturantName + ", resturantAddress=" + resturantAddress + ", image="
				+ Arrays.toString(image) + "]";
	}
	
	
	
}
