export const levels = (level, lines) => {
  return lines >= (level + 1) * 10 ? level + 1 : level;
};

export const speed = (level) => {
  switch (level) {
    case 0:
      return 48;
    case 1:
      return 43;
    case 2:
      return 38;
    case 3:
      return 33;
    case 4:
      return 28;
    case 5:
      return 23;
    case 6:
      return 18;
    case 7:
      return 13;
    case 8:
      return 8;
    case 9:
      return 6;
    case 10:
      return 5;
    case 11:
      return 5;
    case 12:
      return 5;
    case 13:
      return 4;
    case 14:
      return 4;
    case 15:
      return 4;
    case 16:
      return 3;
    case 17:
      return 3;
    case 18:
      return 3;
    case 19:
      return 2;
    case 20:
      return 2;
    case 21:
      return 2;
    case 22:
      return 2;
    case 23:
      return 2;
    case 24:
      return 2;
    case 25:
      return 2;
    case 26:
      return 2;
    case 27:
      return 2;
    case 28:
      return 2;
    default:
      return 1;
  }
};

export const tetrominos = {
  T: {
    key: "T",
    color: "purple",

    blocks: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
  },
  L: {
    key: "L",
    color: "red",
    blocks: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
    ],
  },
  J: {
    key: "J",
    color: "blue",
    blocks: [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
  },
  // TODO: Fix O rotation
  O: {
    key: "O",
    color: "yellow",
    blocks: [
      { x: 0, y: -1 },
      { x: 0, y: 0 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
    ],
  },
  I: {
    key: "I",
    color: "lightblue",
    blocks: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
  S: {
    key: "S",
    color: "green",
    blocks: [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ],
  },
  Z: {
    key: "Z",
    color: "pink",
    blocks: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
  },
};

export const points = (level, lines) => {
  const modifier = () => {
    switch (lines) {
      case 1:
        return 40;
      case 2:
        return 100;
      case 3:
        return 300;
      case 4:
        return 1200;
      default:
        return 0;
    }
  };

  return modifier() * (level + 1);
};