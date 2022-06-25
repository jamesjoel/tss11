function studentResult(sub1, sub2, sub3, attend) {
  // var sub1 = 72;
  // var sub2 = 50;
  // var sub3 = 37;
  var totalMarks = sub1 + sub2 + sub3;
  // var attend = 60;

  //var f = console.log("Failed");
  //var g = console.log("Good");
  //var v = console.log("Very Good");
  //var e = console.log("Excellent");

  console.log("Total Marks " + totalMarks);

  // calculating Percentage
  var percent = (totalMarks * 100) / 300;
  console.log("Percent = " + percent);
  console.log("Attendence = " + attend);

  function checkResult(attend, percent) {
    if (attend <= 80 && percent <= 90) {

        if (attend <= 70 && percent <= 80) {

            if (attend <= 60 && percent <= 70) {

                return console.log("Good");

            } else {

                return console.log("Very Good");
            }


        } else {


        return console.log("Excellent");
      }

    } else if (attend <= 60 && percent >= 90) {

      if (attend <= 50 && percent >= 80) {

        if (attend <= 40 && percent <= 70) {

             return console.log("Excellent");

        } else {

            return console.log("Very Good");

        }

      } else {

        return console.log("Good");

      }
    } else {

        return console.log("Failed");

    }
  }

  checkResult(attend, percent);
}

studentResult(70, 70, 70, 70);
