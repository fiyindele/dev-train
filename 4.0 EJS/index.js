import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const A = new Date();
  const dayToday = A.getDay();
  //   console.log(dayToday);

  let type = "a weekday";
  let adv = "it's time to work";

  if (dayToday === 6 || dayToday === 0) {
    type = "the weekend";
    adv = "it's time to have fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
