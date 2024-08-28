import express from 'express'

const server = express()


server.get("/download-cv", (req, res) => {
    res.download("JonarLarsgardCV.pdf", (err) => {
        if(err){
            console.log("Error downloading CV!");
            res.status(500).send("Error downloading this file!");
        }
    })

})

server.listen(1001, () => {
    console.log("server started at port 1001");
})