// utils/emojiUtils.ts

const coolEmojis = [
  "😎",
  "😍",
  "😊",
  "😄",
  "😏",
  "🤩",
  "😘",
  "🥳",
  "😉",
  "😇",
  "😂",
  "😜",
  "😋",
  "🤪",
  "😌",
  "😁",
  "😃",
  "😆",
  "🙂",
  "😻",
  "🤗",
  "😺",
  "😸",
  "😼",
  "😻",
  "😽",
  "😸",
  "🙀",
  "😹",
  "😻",
];

export const generateRandomCoolEmoji = (): string => {
  if (coolEmojis.length === 0) {
    return "😎";
  }

  const randomIndex = Math.floor(Math.random() * coolEmojis.length);
  return coolEmojis[randomIndex] || "😎";
};
