
export class Haiku{

  constructor(lineOne, lineTwo, lineThree){
    this.lineOne = lineOne.split("");
    this.lineTwo = lineTwo.split("");
    this.lineThree = lineThree.split("");
  }

  syllableCounter()
  {

    let vowelCount = 0;
    const vowelString = ["a", "e", "i", "o", "u", "y"];

    for(i = 0; i < this.length; i++){
      for (var o = 0; o < vowelString.length; o++){
        if(this.lineOne[i] == vowelString[o] || this.lineTwo[i] == vowelString[o] || this.lineThree[i] == vowelString[o])
        {
          vowelCount += 1;
        }
      }
    }

    if (this.lineOne includes("ae") || this.lineTwo includes("ae") || this.lineThree includes("ae")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("ou") || this.lineTwo includes("ou") || this.lineThree includes("ou")){
      vowelCount -= 1;

    }

    if (this.lineOne includes("ea") || this.lineTwo includes("ea") || this.lineThree includes("ea")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("uo") || this.lineTwo includes("uo") || this.lineThree includes("uo")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("ee") || this.lineTwo includes("ee") || this.lineThree includes("ee")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("ie") || this.lineTwo includes("ie") || this.lineThree includes("ie")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("ue") || this.lineTwo includes("ue") || this.lineThree includes("ue")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("ei") || this.lineTwo includes("ei") || this.lineThree includes("ei")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("eu") || this.lineTwo includes("eu") || this.lineThree includes("eu")){
      vowelCount -= 1;
    }

    if (this.lineOne includes("eo") || this.lineTwo includes("eo") || this.lineThree includes("eo")){
      vowelCount -= 1;
    }
  }
}
