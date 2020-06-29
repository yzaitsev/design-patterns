const app = require('./app-middlewares'); 


const addUserName = (data, next) => {
  data.userName = 'John';
  next();
}
const addUserAge = (data, next) => {
  data.userAge = 25;
  next();
}
const expUserAddress = (data, next) => {
  next(new Error('Address is not provided'));
}

app.use(addUserName);
app.use(addUserAge);
// app.use(expUserAddress); 

app.run();