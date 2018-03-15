export class Haiku{

  constructor(lineOne, lineTwo, lineThree){
    this.lineOne = lineOne.toLowerCase().split(" ");
    this.lineTwo = lineTwo.toLowerCase().split(" ");
    this.lineThree = lineThree.toLowerCase().split(" ");
  }

  syllableCounter(line)
  {
    let vowelCount = 0;
    line.forEach(function(word)
    {
      let charArray = word.split("");
      charArray.forEach(function(char)
      {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "y" )
        {
          vowelCount += 1;
        }
      });
      if(word.endsWith("e") || word.endsWith("es"))
      {
        vowelCount -= 1;
      }
      if(word.endsWith("ee") || word.endsWith("ii"))
      {
        vowelCount += 1;
      }
      if(word.includes("ae"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ai"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ao"))
      {
        vowelCount -= 1;
      }
      if(word.includes("au"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ay"))
      {
        vowelCount -= 1;
      }
      if(word.includes("aa"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ea"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ei"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ee"))
      {
        vowelCount -= 1;
      }
      if(word.includes("eo"))
      {
        vowelCount -= 1;
      }
      if(word.includes("eu"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ey"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ia"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ie"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ii"))
      {
        vowelCount -= 1;
      }
      if(word.includes("io"))
      {
        vowelCount -= 1;
      }
      if(word.includes("iu"))
      {
        vowelCount -= 1;
      }
      if(word.includes("iy"))
      {
        vowelCount -= 1;
      }
      if(word.includes("oa"))
      {
        vowelCount -= 1;
      }
      if(word.includes("oe"))
      {
        vowelCount -= 1;
      }
      if(word.includes("oi"))
      {
        vowelCount -= 1;
      }
      if(word.includes("oo"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ou"))
      {
        vowelCount -= 1;
      }
      if(word.includes("oy"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ua"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ue"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ui"))
      {
        vowelCount -= 1;
      }
      if(word.includes("uo"))
      {
        vowelCount -= 1;
      }
      if(word.includes("uu"))
      {
        vowelCount -= 1;
      }
      if(word.includes("uy"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ya"))
      {
        vowelCount -= 1;
      }
      if(word.includes("ye"))
      {
        vowelCount -= 1;
      }
      if(word.includes("yi"))
      {
        vowelCount -= 1;
      }
      if(word.includes("yo"))
      {
        vowelCount -= 1;
      }
      if(word.includes("yu"))
      {
        vowelCount -= 1;
      }
      if(word.includes("yy"))
      {
        vowelCount -= 1;
      }
      if(word == "the" || word == "eye" || word == "eyes")
      {
        vowelCount += 1;
      }
    });
    return vowelCount;
  }
}
