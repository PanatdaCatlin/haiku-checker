import {Haiku} from './../js/haiku.js';

describe('arrayConvertWord', function(){
  it ('should test that line is converted to array', function(){
    let firstHaiku = new Haiku("how are you today", "The day is great and pretty", "well thats good to hear");
    expect(firstHaiku.lineOne).toEqual(['how','are','you','today']);
    expect(firstHaiku.lineTwo).toEqual(['the', 'day', 'is', 'great', 'and', 'pretty']);
    expect(firstHaiku.lineThree).toEqual(['well', 'thats', 'good', 'to', 'hear']);
  });
});
describe('arrayConvertChar', function(){
  it ('should test that word is converted to array', function(){
    let firstHaiku = new Haiku("how are you today", "The day is great and pretty", "well thats good to hear");
    expect(firstHaiku.syllableCounter(firstHaiku.lineOne)).toEqual(5);
    expect(firstHaiku.syllableCounter(firstHaiku.lineTwo)).toEqual(7);
    expect(firstHaiku.syllableCounter(firstHaiku.lineThree)).toEqual(5);
  });
});
