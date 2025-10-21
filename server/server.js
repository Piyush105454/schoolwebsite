require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Stripe = require("stripe");
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Stripe Checkout Route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "College Fee Payment",
            },
            unit_amount: 50000, // ₹500.00 (50000 paise)
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5000/success", // Fixed port placement
      cancel_url: "http://localhost:5000/cancel",
    });

     res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: "Something went wrong with Stripe Checkout" });
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
