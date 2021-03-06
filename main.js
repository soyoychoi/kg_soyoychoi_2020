// isOneToOne function returns false if s1 has repeating characters
// (checks using a hashmap) or if s1 is longer than s2
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

// read inputs from stdin and print output into stdout
if (process.argv.length <= 3) {
  console.log("false");
} else {
  const s1 = process.argv[2];
  const s2 = process.argv[3];
  console.log(isOneToOne(s1, s2));
}
