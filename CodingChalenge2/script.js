var johnTeamAvg = (89 + 120 + 103)/3;
var mikeTeamAvg = (116 + 94 + 123)/3;
var maryTeamAvg = (97 + 134 + 105)/3;

if(johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg){
    console.log('John won with an average of ' + johnTeamAvg + ' poins.')
}
else if(mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg){
    console.log('Mike won with an average of ' + mikeTeamAvg + ' poins.')
}
else if(maryTeamAvg > mikeTeamAvg && maryTeamAvg > johnTeamAvg){
    console.log('Mary won with an average of ' + maryTeamAvg + ' poins.')
}
else{
    console.log('There is some draw!!');
}
