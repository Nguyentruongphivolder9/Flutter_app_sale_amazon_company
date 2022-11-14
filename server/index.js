// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const POST = 3000;
const app = express();
const DB = "mongodb+srv://ultron:Phi797979@cluster0.0swoeb4.mongodb.net/?retryWrites=true&w=majority";

// middleware(Phần mền trung gian)
// CLIENT -> middleware -> SERVER -> CLIENT
// (data khách hàng gửi dữ liệu qua phần mềm trung gian về máy chủ sau đó mấy chủ trả data về người dùng)
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(POST, "0.0.0.0", () => {
    console.log(`connected at port ${POST}`)
});
