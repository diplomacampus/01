<style>
#notify-card {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  background: #111;
  color: #fff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  font-family: Arial, sans-serif;
  z-index: 9999;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.5s ease;
}

#notify-card.show {
  transform: translateY(0);
  opacity: 1;
}

#notify-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

#notify-card p {
  font-size: 13px;
  margin-bottom: 12px;
}

.notify-btns a {
  display: inline-block;
  margin-right: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 12px;
  color: #fff;
}

.whatsapp {
  background: #25D366;
}

.telegram {
  background: #0088cc;
}

#close-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
  font-size: 16px;
}
</style>

<script>
(function() {

  // Show only once per tab
  if (sessionStorage.getItem("notifyShown")) return;

  sessionStorage.setItem("notifyShown", "true");

  // Create card
  const card = document.createElement("div");
  card.id = "notify-card";

  card.innerHTML = `
    <span id="close-btn">✖</span>
    <h3>Join Our Channels</h3>
    <p>Get updates instantly on WhatsApp & Telegram</p>
    
    <div class="notify-btns">
      <a href="https://wa.me/your-link" target="_blank" class="whatsapp">WhatsApp</a>
      <a href="https://t.me/your-channel" target="_blank" class="telegram">Telegram</a>
    </div>
  `;

  document.body.appendChild(card);

  // Animate
  setTimeout(() => {
    card.classList.add("show");
  }, 300);

  // Close button
  document.getElementById("close-btn").onclick = function() {
    card.style.transform = "translateY(100px)";
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 400);
  };

})();
</script>