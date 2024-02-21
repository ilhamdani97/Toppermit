QountString('HAAHSSSJAAAABDDD')

function QountString(value){
  const counts = new Map();

  for (const word of value) {
    const count = counts.get(word) ?? 0;
    counts.set(word, count + 1);
  }

  // Show the counts
  for (const [word, count] of counts) {
      console.log(`"${word}" count: ${counts.get(word)}`);
  }

}