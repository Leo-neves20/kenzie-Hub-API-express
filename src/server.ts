import app from "./app";
import appDataSource from "./data-source";

appDataSource.initialize().then(() => {

    console.log('data-base connected')

    app.listen(3001, () => {
        console.log("Server is Running in port 3001")
    })

})
