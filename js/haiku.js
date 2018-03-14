
export class Haiku{

  constructor(lineOne, lineTwo, lineThree){
    this.lineOne = lineOne.split("");
    this.lineTwo = lineTwo.split("");
    this.lineThree = lineThree.split("");
  }

//   syllableCounter()
//   {
//
//     let syllableCount = 0;
//
//     for(i = 0; i < this.length; i++)
//       if (this.lineOne.split("")includes("ae") || this.lineTwo.split("")includes("ae") || this.lineThree.split("")includes("ae")){
//         syllableCount -= 1;
//         return syllableCount;
//   }
//
// }
}

//  export function syllableCounter(arrayOne, arrayTwo, arrayThree){
//   let firstArray = arrayOne.split("");
//   let secondArray = arrayTwo.split("");
//   let thirdArray = arrayThree.split("");
//     const vowelString = ["a", "e", "i", "o", "u", "y"];
//
//     for (var i = 0; i < firstArray.length; i++) {
//       for (var o = 0; o < vowelString.length; o++) {
//         if (firstArray[i] == vowelString[o]) {
//
//           return firstArray;
// }
// }
// }
// }
