module.exports = (app, path) => {
  app.get("/survey", (req, res) => {
    const route = path.join(__dirname, "/../public/survey.html");
    res.sendFile(path.resolve(route), err => {
      if (err) throw err;
    });
  });
  app.get("*", (req, res) => {
    const route = path.join(__dirname, "/../public/home.html");
    res.sendFile(path.resolve(route), err => {
      if (err) {
        throw err;
      }
    });
  });
};
