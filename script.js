const messages = [
  "you are so much more than enough <3",
  "your presence is a gift <3",
  "you’re precious, please never forget that <3",
  "you’re precious, please never forget that <3",
  "you’re worthy of love <3",
  "you’re more loved than you realize <3",
  "you bring peace wherever you go <3",
  "you deserve good things, always <3",
  "i love you more than there are stars in the sky <3",
  "you're my favorite <3",
  "i love you axton miles <3",
  "you mean the world to me <3",
  "you’re my favorite person in the whole universe <3",
  "I can’t stop smiling when I think about you <3",
  "I’m thankful every day to have you <3",
  "every second with you is a second I adore <3",
  "I fall for you more every day <3",
  "you make even ordinary days extraordinary <3",
  "I cherish you <3",
  "you are the reason my heart beats with so much love <3",
  "I adore your kindness, your strength, and your beautiful soul <3",
  "I fall deeper in love with you every single day <3",
  "you’re the one who holds my heart <3",
  "you’re the sweetest part of my life <3",
  "I  adore every hug, every kiss, every moment we share <3",
  "I love you a lot axton miles <3",
  "I love you my sanity <3"
];

function generateRandomNotifications() {
  const notificationCount = 100;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>oops ..</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});
