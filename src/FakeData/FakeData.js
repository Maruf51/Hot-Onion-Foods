import breakfast1 from '../images/Breakfast/breakfast1.png';
import breakfast2 from '../images/Breakfast/breakfast2.png';
import breakfast3 from '../images/Breakfast/breakfast3.png';
import breakfast4 from '../images/Breakfast/breakfast4.png';
import breakfast5 from '../images/Breakfast/breakfast6.png';
import breakfast6 from '../images/Breakfast/breakfast5.png';
import lunch1 from '../images/lunch/lunch1.png';
import lunch2 from '../images/lunch/lunch2.png';
import lunch3 from '../images/lunch/lunch3.png';
import lunch4 from '../images/lunch/lunch4.png';
import lunch5 from '../images/lunch/lunch5.png';
import lunch6 from '../images/lunch/lunch6.png';
import dinner1 from '../images/Dinner/dinner1.png';
import dinner2 from '../images/Dinner/dinner2.png';
import dinner3 from '../images/Dinner/dinner3.png';
import dinner4 from '../images/Dinner/dinner4.png';
import dinner5 from '../images/Dinner/dinner5.png';
import dinner6 from '../images/Dinner/dinner6.png';

var foods = [
    {foodName: 'Eggs Benedict', id: '1', price: 8.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast1, category: 'breakfast'},
    {foodName: 'Breakfast Sandwich', id: '2', price: 9.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast2, category: 'breakfast'},
    {foodName: 'Baked Chicken', id: '3', price: 10.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast3, category: 'breakfast'},
    {foodName: 'Bagel and Cream Cheese', id: '4', price: 6.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast4, category: 'breakfast'},
    {foodName: 'Full Breakfast Fried Egg Toast Brunch', id: '5', price: 3.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast5, category: 'breakfast'},
    {foodName: 'Toast Croissant Fried Egg', id: '6', price: 19.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: breakfast6, category: 'breakfast'},
    {foodName: 'Beef Steak', id: '7', price: 15.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch1, category: 'lunch'},
    {foodName: 'Honey-Soy-Glazed Salmon with Peppers', id: '8', price: 7.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch2, category: 'lunch'},
    {foodName: 'Tarragon-Rubbed-Salmon', id: '9', price: 6.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch3, category: 'lunch'},
    {foodName: 'Indian Lunch', id: '10', price: 8.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch4, category: 'lunch'},
    {foodName: 'Fried Chicken Bento', id: '11', price: 9.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch5, category: 'lunch'},
    {foodName: 'Healthy Meal Plan', id: '12', price: 23.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: lunch6, category: 'lunch'},
    {foodName: 'Baked Chicken', id: '13', price: 9.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner1, category: 'dinner'},
    {foodName: 'Lemony Salmon Piccata', id: '14', price: 10.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner2, category: 'dinner'},
    {foodName: 'Garlic Butter Baked Salmon', id: '15', price: 6.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner3, category: 'dinner'},
    {foodName: 'French Fries with Cheese', id: '16', price: 8.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner4, category: 'dinner'},
    {foodName: 'Pork Tenderloin with Quinoa Pilaf', id: '17', price: 12.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner5, category: 'dinner'},
    {foodName: 'Salmon with Grapefruit and Lentil Salad', id: '18', price: 9.99, detail: 'How we dream about our Future.', foodDetails: 'Gay one the what walt then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye.', foodImage: dinner6, category: 'dinner'}
]

export default foods;