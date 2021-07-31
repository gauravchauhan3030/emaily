const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "Rupees 5 for 5 credits",
      source: req.body.id,
      //   name: "test",
      //   address: {
      //     country: "India",
      //     city: "Noida",
      //     state: "UP",
      //     postal_code: 201303,
      //   },
    });
    // "city" => $city, "country" => $country, "line1" => $address, "line2" => "", "postal_code" => $zipCode, "state" => $state

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
