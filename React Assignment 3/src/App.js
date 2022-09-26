import './App.css';
import CustomerInfo from './Components/customer-info';
import Header from './Components/header.js';
import OrderInfo from './Components/order-info';
import ProductList from './Components/product-list';

function App() {
  const data={
    header:{
      name: 'Alan Ford',
      EmployeeId: "00005152"
    },
    customerInfo:{
      info:[
        {key:"Appointment",value:"9:00 AM (24-05-2016)"},
        {key:"Email",value:"alan.form@email.nl"},
        {key:"Phone",value:"+31123456789"}
      ]
    },
    orderInfo:{
      info:[
        {key:"Status",value:"In Progress"},
        {key:"Door",value:"Mark"},
        {key:"Time",value:"9:00 AM (24-05-2016)"}
      ]
    },
    productList:{
      image:"https://www.w3schools.com/howto/img_avatar.png",
      name:"Boltaart Bosbessan",
      description:"Overheerlijke Boltaart met Bolbessan uit de keuken van de Bijenkorf"
    }
  }
  return (
    <div className="App">
      <Header headerData={data.header}/>
      <CustomerInfo customerData={data.customerInfo.info}/>
      <OrderInfo orderData={data.orderInfo.info}/>
      <ProductList productData={data.productList}/>
    </div>
  );
}

export default App;
