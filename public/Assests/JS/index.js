var says = [
  "Is That a skool Reference?",
  "Please Stop Being Racist In The DISC0RD",
  "https://discord.gg/krcMnDdhVp",
  "Your one and only Unbl0cked Playground",
  "I hate working on skool",
  "Better than Bypass",
  "GD 2.2 OCTOBER 2023!!!",
  "yowoodTodd",
  "Bot",
  "skool 2.0!",
  "stop asking where disc0rd is. its in widgetbot",
  "blogs was usless",
  "so was secrets",
  "Tempus fugit ⏰",
  "shoutout to skool devs (me, htesdev, and GhostedZoomer)",
  "no you shouldnt skid it",
  "what do i add?",
  "*you're* 👆🤓",
  "idk how many games are in this lol",
  "optimized by ChatGPT",
  "archiving your mom soon",
  "Cooper thanks for loving skool!",
  "i cant use fontawesome because of you guys :(",
  "u should join the discord: https://discord.gg/krcMnDdhVp",
  "join the discord: https://discord.gg/krcMnDdhVp",
  "uh",
  "my coder friends copying me and hes better at coding then me",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
  "all 1v1lol's are blocked at my school", 
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii aiden :)",
  "i hate myself",
  "im in love with a emo gorl 💅",
  "amog",
  "💀",
  "hey e-kitten",
  "are you piss because urine my heart"
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});

window.onload = function () {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.style.display = 'none';
    alert('Mobile devices are not supported');
  }
};
