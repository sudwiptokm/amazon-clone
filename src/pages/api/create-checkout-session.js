const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
  // console.log(items);
  // console.log(email);

  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "gbp",
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 299, currency: "gbp" },
          display_name: "Next Day Shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 2 },
          },
        },
      },
    ],
  });

  res.status(200).json({ id: session.id });
};
