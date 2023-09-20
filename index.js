






let subjectMarks = [];
var totalSubjects = prompt("Enter the number of subjects:");
totalSubjects = parseInt(totalSubjects);
var totalMarks = prompt("Enter the Total marks:");
totalMarks = parseInt(totalMarks);
document.write('Total number of subjects: ' + totalSubjects + '<br>');
document.write('Total Marks: ' + totalMarks + '<br>');

for (var k = 0; k < totalSubjects; k++) {
  var marks = prompt("Enter marks for subject " + (k + 1) + ":");
  marks = parseFloat(marks); 
  subjectMarks.push(marks);
}

document.write("Marks of subject:<br>");
for (var k = 0; k < subjectMarks.length; k++) {
    document.write("Subject " + (k + 1) + ": " + subjectMarks[k] + '<br>');
}

var obtainMarks = 0;
for (var k = 0; k < subjectMarks.length; k++) {
    obtainMarks += subjectMarks[k];
}
document.write("Total obtained marks: " + obtainMarks);
grade=obtainMarks/totalMarks*100;
if (percentage >= 90) {
   document.write(' GPA is 4.0 and Grade is A');
} else if (percentage >= 85) {
   document.write('  GPA is 3.7  and Grade is B');
} else if (percentage>= 80) {
   document.write(' GPA is 3.3  and Grade is B-');
} else if (percentage >= 75) {
   document.write(' GPA is 3.0  and Grade is C');
} else if (percentage>= 70) {
   document.write(' GPA is 2.7  and Grade is C-');
} else if (percentage>= 60) {
   document.write(' GPA is 2.3  and Grade is D');
} else if (percentage>=50 ) {
   document.write(' GPA is 2.0  and Grade is D-');
} else {
   document.write('GPA is 0.0 and Grade is F');
}




/*-----------------------------------------------------------*/

