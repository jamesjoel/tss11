function calculateGST(getPrice, getSlab, isRetailer) {
  var p = (0.03 * getPrice) + getPrice;
  var s = getSlab;
  var c = isRetailer;

  if (c == "yes" || c == "YES") {
    var result;
    switch (s) {
      case 1:
        result = 0.05 * p + p;
        break;
      case 2:
        result = 0.12 * p + p;
        break;
      case 3:
        result = 0.18 * p + p;
        break;
      case 4:
        result = 0.28 * p + p;
        break;
      default:
        break;
    }
    return result;

  } else {
    return p;
  }
}

var finalPrice = calculateGST(100,1,'no');
console.log(finalPrice);