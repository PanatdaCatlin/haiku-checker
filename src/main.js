import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Haiku} from './../js/haiku.js';

$(document).ready(function() {
  $("#haiku-form").submit(function(event){
  event.preventDefault();
 let lineOne = $("#lineOne").val();
 let lineTwo = $("#lineTwo").val()
 let lineThree = $("#lineThree").val()

 let newHaiku = new Haiku(lineOne, lineTwo, lineThree);

 if (newHaiku.syllableCounter(newHaiku.lineOne) !== 5 && newHaiku.syllableCounter(newHaiku.lineTwo) !== 7 && newHaiku.syllableCounter(newHaiku.lineThree) !== 5){
   console.log(newHaiku.syllableCounter(newHaiku.lineOne));
   $("#lineOneTotal").append(newHaiku.syllableCounter(newHaiku.lineOne));
   $("#lineTwoTotal").append(newHaiku.syllableCounter(newHaiku.lineTwo));
   $("#lineThreeTotal").append(newHaiku.syllableCounter(newHaiku.lineThree));
   $("#vowelCount").show();
 }else{
   $("#haiku").show();
 }

 $(".reset").click(function()
{
  $("#lineOne").val("");
  $("#lineTwo").val("");
  $("#lineThree").val("");
  $("#haiku").hide();
  $("#vowelCount").hide();
});
 });
});
