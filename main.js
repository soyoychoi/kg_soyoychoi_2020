const isOneToOne = (s1, s2) => {
  let map = new Map();
  if (s1.length > s2.length) {
    return "false";
  } else {
    for (let i = 0; i < s1.length; i++) {
      if (map.has(s1.charAt(i))) {
        return "false";
      } else {
        map.set(s1.charAt(i), i);
      }
    }
  }
  return "true";
};
