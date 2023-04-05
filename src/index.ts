import express, { Request, Response } from "express";
const app = express();

app.use("*", async (req: Request, res: Response) => {
  const { originalUrl, url, baseUrl } = req;
  console.log("Invalid Route:", {
    originalUrl,
    url,
    baseUrl,
  });
  res.status(400).send({
    message: "Invalid Route",
    routeInfo: {
      originalUrl,
      url,
      baseUrl,
    },
  });
});
app.listen(5000, async () => {
  console.log("App is Running.");
});
