function studentResult() {
  var sub1 = 72;
  var sub2 = 50;
  var sub3 = 37;
  var totalMarks = sub1 + sub2 + sub3;
  var attend = 60;

  console.log("Total Marks " + totalMarks);

  // calculating Percentage
  var percent = (totalMarks * 100) / 300;
  console.log("Percent = " + percent);
  console.log("Attendence = " + attend);

  function checkResult(attend, percent) {
    if (attend <= 80 && percent <= 90) {
      if (attend <= 70 && percent <= 80) {
        if (attend <= 60 && percent <= 90) {
          console.log("Good");
        } else {
          console.log("Very Good");
        }
      } else {
        console.log("Excellent");
      }
    } else if (attend <= 60 && percent >= 90) {
      if (attend <= 50 && percent >= 80) {
        if (attend >= 40 && percent >= 70) {
          console.log("Excellent");
        } else {script
          console.log("Very Good");
        }
      } else {
        console.log("Good");
      }
    } else {
      console.log("Failed");
    }
  }

  checkResult(attend, percent);
}

studentResult();
