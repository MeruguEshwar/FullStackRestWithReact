package com.ojas.Dao;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.ojas.model.Customer;
import com.ojas.model.FoodItems;

public class CustomerDaoImplementation implements CustomerDao {

	Configuration configuration = null;
	SessionFactory sessionFactory = null;
	Session session = null;
	Transaction transaction = null;
	String msg = null;

	public String createCustomers(int customerId, String customerName, String customerEmail, String passWord,
			String conformPassWord, String walletAmont) {

		configuration = new Configuration();
		configuration.configure();

		sessionFactory = configuration.buildSessionFactory();
		session = sessionFactory.openSession();

		transaction = session.beginTransaction();

		Customer customer = new Customer();
		customer.setCustomerId(customerId);
		customer.setCustomerName(customerName);
		customer.setCustomerEmail(customerEmail);
		customer.setConformPassWord(conformPassWord);
		customer.setPassWord(passWord);
		customer.setWalletAmont(walletAmont);

		int i = (Integer) session.save(customer);
		if (i > 0) {
			msg = "Values inserted";
		} else {
			msg = "Values are not inserted";
		}

		transaction.commit();
		session.close();
		sessionFactory.close();

		return msg;
	}

	public String updateCustomer(int customerId, String customerName, String customerEmail, String passWord,
			String conformPassWord, String walletAmont) {

		configuration = new Configuration();
		configuration.configure();

		sessionFactory = configuration.buildSessionFactory();
		session = sessionFactory.openSession();

		transaction = session.beginTransaction();

		Query query = session.createQuery(
				"update Customer set customerName=:customerName,customerEmail=:customerEmail,passWord=:passWord,conformPassWord=:conformPassWord,walletAmont=:walletAmont  where customerId=:customerId ");
		query.setParameter("customerId", customerId);
		query.setParameter("customerName", customerName);
		query.setParameter("customerEmail", customerEmail);
		query.setParameter("passWord", passWord);
		query.setParameter("conformPassWord", conformPassWord);
		query.setParameter("walletAmont", walletAmont);

		int i = query.executeUpdate();
		transaction.commit();
		if (i != 0) {
			msg = "updated successfully";
		} else {
			msg = "try again";
		}

		session.close();
		sessionFactory.close();

		return msg;
	}

	public String AddItems(String itemName, String itemPrice, String resturantName, String resturantAddress,
			byte[] image) {

		configuration = new Configuration();
		configuration.configure("Avatar.cfg.xml");
		sessionFactory = configuration.buildSessionFactory();
		session = sessionFactory.openSession();
		transaction = session.beginTransaction();

		File file = new File("src/main/java/com/ojas/Dao/shades.png");
		byte[] bFile = new byte[(int) file.length()];

		try {
			FileInputStream fileInputStream = new FileInputStream(file);
			fileInputStream.read(bFile);
			fileInputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		FoodItems food = new FoodItems();
//		food.setItemId();
		food.setItemName(itemName);
		food.setItemPrice(itemPrice);
		food.setResturantName(resturantName);
		food.setResturantAddress(resturantAddress);
		food.setImage(image);

		int i = (Integer) session.save(food);
		if (i > 0) {
			msg = "Values inserted";
		} else {
			msg = "Values are not inserted";
		}

		transaction.commit();
		session.close();
		sessionFactory.close();

		return msg;
	}

}
