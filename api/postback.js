export default async function handler(req, res) {
  const { offer_id, click_id, payout, country, status, ip } = req.query;
  
    const BOT_TOKEN = "8336394759:AAGNthyfT0kKc5OJVtzM2t-Bzx8IV3LA2qo";
    const CHAT_ID = "-1002969579542";
  
const message = `
🔥 New Conversion Alert 🔥

📌 Offer ID: ${offer_id}
🆔 Click ID: ${click_id}

💰 Payout: ${payout}
🌍 Country: ${country}
📊 Status: ${status}
🔎 IP Address: ${ip}

--------------------------
⚡ Powered by Adbluemedia
`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  res.status(200).json({ success: true, sent: message });
}
