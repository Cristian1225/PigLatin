function translateToPigLatin(text) {
   
    const words = text.split(' ');
  
    const translatedWords = [];
  
   
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const lowercaseWord = word.toLowerCase(); 
      
      if (word.length === 0 || word.length === 1) {
        console.log('Unable to translate: ' + word);
        return;
      }
  
      
      if (isVowel(lowercaseWord[0])) {
        translatedWords.push(word + 'way');
      }
    
      else if (isConsonant(lowercaseWord[0])) {
        
        if (isConsonant(lowercaseWord[1])) {
          translatedWords.push(word.slice(2) + lowercaseWord.slice(0, 2) + 'ay');
        } else {
          translatedWords.push(word.slice(1) + lowercaseWord[0] + 'ay');
        }
      }
    }
  
   
    const translatedText = translatedWords.join(' ');
  
    
    console.log('Translated text: ' + translatedText);
  }
  
 
  function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
  }
  
  
  function isConsonant(char) {
    return !isVowel(char);
  }
  
  // Example usage
  const inputText = prompt('Enter a phrase:');
  translateToPigLatin(inputText);