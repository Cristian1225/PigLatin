function translateToPigLatin(text) {
    // Split the input text into an array of words
    const words = text.split(' ');
  
    // Initialize an array to store the translated words
    const translatedWords = [];
  
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const lowercaseWord = word.toLowerCase(); // Convert the word to lowercase for easier comparison
  
      // Check if the word is empty or a single-letter word
      if (word.length === 0 || word.length === 1) {
        console.log('Unable to translate: ' + word);
        return;
      }
  
      // Check if the word starts with a vowel
      if (isVowel(lowercaseWord[0])) {
        translatedWords.push(word + 'way');
      }
      // Check if the word starts with a consonant
      else if (isConsonant(lowercaseWord[0])) {
        // Check if the word starts with two consonants
        if (isConsonant(lowercaseWord[1])) {
          translatedWords.push(word.slice(2) + lowercaseWord.slice(0, 2) + 'ay');
        } else {
          translatedWords.push(word.slice(1) + lowercaseWord[0] + 'ay');
        }
      }
    }
  
    // Join the translated words array back into a string
    const translatedText = translatedWords.join(' ');
  
    // Print the translated text
    console.log('Translated text: ' + translatedText);
  }
  
  // Function to check if a character is a vowel
  function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
  }
  
  // Function to check if a character is a consonant
  function isConsonant(char) {
    return !isVowel(char);
  }
  
  // Example usage
  const inputText = prompt('Enter a phrase:');
  translateToPigLatin(inputText);