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
