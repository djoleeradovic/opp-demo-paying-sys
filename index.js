import CreditCard from "./CreditCard.js";
import PayPal from "./PayPal.js";
import Crypto from "./Crypto.js";

const visa = new CreditCard();
const account = new PayPal();
const wallet = new Crypto();

// Visa payments
visa.setCurrency("RSD");
visa.setValue(1000);
visa.pay("water bill", 400, "RSD", 2023);

// PayPal payments
account.setCurrency("EUR");
account.setValue(1000);
account.pay("water bill", 400, "EUR", 2023);

// Crypto payments
wallet.setCurrency("ETH");
wallet.setValue(1000);
wallet.pay("water bill", 400, "ETH", 2023);
