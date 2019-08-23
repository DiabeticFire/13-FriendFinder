module.exports = (app, path) => {
  app.get("/", (req, res) => {
    let route = path.join(__dirname, "../public/home.html");
    res.sendFile(path.resolve(route), err => {
      if (err) throw err;
    });
  });
  app.get("/survey", (req, res) => {
    let route = path.join(__dirname, "../public/survey.html");
    res.sendFile(path.resolve(route), err => {
      if (err) throw err;
    });
  });
};
