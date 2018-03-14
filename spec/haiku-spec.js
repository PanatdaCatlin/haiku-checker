import {Haiku} from './../js/haiku.js';

describe('arrayConvert', function(){
  it ('should test that input is converted to array', function(){
    let firstHaiku = new Haiku("how are you today", "The day is great and pretty", "well thats good to hear");
    console.log(firstHaiku);
    expect(firstHaiku.lineOne).toEqual(['h','o','w',' ','a','r','e',' ','y','o','u',' ','t','o','d','a','y']);
    expect(firstHaiku.lineTwo).toEqual([ 'T', 'h', 'e', ' ', 'd', 'a', 'y', ' ', 'i', 's', ' ', 'g', 'r', 'e', 'a', 't', ' ', 'a', 'n', 'd', ' ', 'p', 'r', 'e', 't', 't', 'y' ]);
    expect(firstHaiku.lineThree).toEqual([ 'w', 'e', 'l', 'l', ' ', 't', 'h', 'a', 't', 's', ' ', 'g', 'o', 'o', 'd', ' ', 't', 'o', ' ', 'h', 'e', 'a', 'r' ]);
  });
});
