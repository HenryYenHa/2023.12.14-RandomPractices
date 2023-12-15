function solution(input, markers) {
  //Set up
  let remainingInput = input;
  let returnString = "";
  let nextMarker = -1;
  let nextNewLine = -1;
  //Loop while there is still stuff to be sorted through
  while (remainingInput.length != 0) {
    nextMarker = checkNextMarkers(remainingInput, markers);
    nextNewLine = checkNextNewLine(remainingInput);
    //If marker is the next edit: slice it up until new
    if (nextMarker < nextNewLine) {
      returnString = returnString + remainingInput.slice(0, nextMarker).trim();
      if (nextNewLine != Infinity) {
        returnString = returnString + "\n";
      }
      remainingInput = remainingInput.slice(nextNewLine + 1);
      //Else if the next edit is a new line: slice it up and move along
    } else if (nextMarker > nextNewLine) {
      returnString =
        returnString + remainingInput.slice(0, nextNewLine + 2).trim();
      remainingInput = remainingInput.slice(nextNewLine + 2);
    }
  }
  return returnString;
}

function checkNextNewLine(input) {
  if (input.indexOf("\n") == -1) {
    return Infinity;
  } else {
    return input.indexOf("\n");
  }
}

function checkNextMarkers(input, markers) {
  let lowestIndex = Infinity;
  for (mark of markers) {
    if (input.indexOf(mark) == -1) {
    } else if (input.indexOf(mark) < lowestIndex) {
      lowestIndex = input.indexOf(mark);
    }
  }
  return lowestIndex;
}
