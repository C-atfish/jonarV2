import express from "express";

const server = express();

server.get("/ping", (req, res) => {
  res.status(200).send("All good in the hood!");
});

server.get("/download-cv", (req, res) => {
  const language = req.query.lang;

  if (language === "norwegian") {
    res.download("JONAR_LARSGARD_CV_NORWEGIAN.pdf", (err) => {
      if (err) {
        console.log("Error downloading CV!");
        console.log(err);

        res.status(500).send("Error downloading this file!");
      }
    });
  } else {
    res.download("JONAR_LARSGARD_CV_ENGLISH.pdf", (err) => {
      if (err) {
        console.log("Error downloading CV!");
        console.log(err);

        res.status(500).send("Error downloading this file!");
      }
    });
  }
});

server.listen(1001, () => {
  console.log("server started at port 1001");
});
