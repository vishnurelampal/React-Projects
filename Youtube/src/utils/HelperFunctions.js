export function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}
export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let [unit, secondsInUnit] of Object.entries(intervals)) {
    const count = Math.floor(seconds / secondsInUnit);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const messages = [
  "Hello everyone 👋",
  "This stream is awesome 🔥🔥",
  "Anyone else from India?",
  "Wow, that’s cool 😎",
  "Can you do a tutorial on this?",
  "Don’t forget to like 👍 and subscribe!",
  "Haha that was funny 😂😂",
  "Shoutout please 🙏",
  "When is the next stream?",
  "Love your content ❤️",
  "This is so helpful, thanks!",
  "Can you explain that part again?",
  "What software are you using?",
  "Great job on the editing!",
  "I learned a lot today!",
  "Can you play some music?",
  "This reminds me of my childhood",
  "Can you do a Q&A session?",
  "I’m new here, hi everyone!",
  "This is my favorite channel!",
];
function generateRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

const iconUserUrls = [
  "https://yt4.ggpht.com/ytc/AIdro_lgE4uaETQ6rGBNW1XkVOllvB0eZLdcb0vBi7-1eSLeYLo=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/ytc/AIdro_mLNB9AiNGF0XOgZBRbEMk-Bf-m6gI8G5HSINWfjDYFVoHAQqWCnZvIt1J_lYcFsYJzsg=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/rCcDvCArvnnYQVlQqxJPLiu1B6xVBz9eCGzjQpkF4Cywde01VhuehI2-x2_WyxBW-MCBJ28nGQ=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/RDh2Zms7arulgZdKvQaNJSoXOr8kNKc1ZaeUhLjtzKXh0nO-KywrHF0nMH1px9gxdf2ygt6CHA=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/EWZE-mrHDTcaw4HzjSd8DieSisd0H9MexGyZ43ux6FGnNz16VV6wwea78g9_M4Ni46hqTdp53ec=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/TN5z-y7yK9u9YP4-0pz_xXd4R2pT-wgJY7oUSu8VdQyLyU7YJ3Kg7ySwGcZpcu9c1oTSWWMrgA=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/ytc/AIdro_lV4EVUJjfyrZWZf9qP2fnsXTX5JUyIuNCycSmrXqUqFXmW0KkXlpkTMqJcmNtqagOLEw=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/XV2fGYwIKM2PsS8zfddtWWgsj2gkDzpwkaRIc0cxWtnNzvi8uQhF3Kx3q8HW23_aes1gs-BFnQ=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/ytc/AIdro_nmtsXDHjV3vsi3WJxNLeR6_m62bNa4V324lnRtnFy0u-rpS5RDcRIx863T-hajBZ4JOA=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/u8IJwIssY4iKPXofgm7S-PdpBan_uxFFiRKKywcrw2LW_msCwsK8uxLrxcEamPFCWXUVLCEU=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/rzEMOzKljnGesTFKGyebo27RGpK_a7Ez8Yr18uPpshQs4hv-WIbpjjKZTzvLXrNtqvGBuBpPgw=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/Sl3CqNUvHPTCDdlGrRTO95QnSmqxiGFNk0DNo3CI04_QkaLeAhKDQM3ihpIXc7xZjUDNDhNtiCA=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/Si9UULb1i89sjPTo8kf_ysZl9_e4zQq2mmVfVEZVji9XR_sq7J40hyV24SKChc2YsfTfjnS5vQ=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/k2ZRl8c917Lt2GguJGK-ohSdSuOFNWlAkK3MDXcdUrunB7NXmvfrwQqon-ST7-icpJFcJy4-=s32-c-k-c0x00ffffff-no-rj",
  "https://yt4.ggpht.com/RRTyPhd2UZQvBPC4xNMVlTqJFSLtgnC2wAVdIX0Pflag8S_oo9hk6vlAVoiCbNeyArGaGLaC=s32-c-k-c0x00ffffff-no-rj",
];
function getRandomUserIcons() {
  return iconUserUrls[Math.floor(Math.random() * iconUserUrls.length)];
}
export const OFFSET_LIVE_CHAT = 10;

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findNthPrime(n) {
  isPrime(n);
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

export {
  findNthPrime,
  generateRandomMessage,
  getRandomUserIcons,
  generateRandomName,
};
