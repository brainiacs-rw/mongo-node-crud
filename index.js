const express = require('express');
const app = express();
const {
    dbConnection
} = require('./models/db');
const {
    userRouter
} = require('./routes/user.routes');
const port = 3000;
app.use(express.json());
app.use("/users", userRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
dbConnection();