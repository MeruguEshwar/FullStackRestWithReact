import axios from "axios";

const baseUrl =
  "http://localhost:8080/FoodeliveryHalfDayAssinment/rest/Customer/createproduct";

const ProductUrl="http://localhost:8080/FoodeliveryHalfDayAssinment/rest/Items/addproduct"

class Service {
  CreateCustomer(customerId,customerName,customerEmail,passWord,conformPassWord,walletAmont) {
    return axios.post(baseUrl+"/"+customerId+"/"+customerName+"/"+customerEmail+"/"+passWord+"/"+conformPassWord+"/"+walletAmont);
  }

  AddProducts(itemName, itemPrice,resturantName,resturantAddress,image){
    return axios.post(ProductUrl+"/"+itemName+"/"+itemPrice+"/"+resturantName+"/"+resturantAddress+"/"+image);  
  }
}

export default new Service();