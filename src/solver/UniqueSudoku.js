export const getUniqueSudoku = async (difficulty, e) => {
  // let temporaryInitArray = nullArray.slice();
  // let temporarySolvedArray = nullArray.slice();

  let level = 1;
  switch (difficulty) {
    case "Easy":
      level = 1;
      break;
  
    case "Medium":
      level = 2;
      break;

    case "Hard":
      level = 3;
      break;
    default:
      break;
  }

  /*
  return await fetch("http://localhost:8080/generate?level=" + level)
    .then(res => res.json())
    .then(body => [body.content, body.solution])
  */

  const response = await fetch("http://localhost:8080/generate?level=" + level);
  const json = await response.json();
  console.log(json);
  return [json.content.map(x => x + ''), json.solution.map(x => x + '')];

  // return [temporaryInitArray, temporarySolvedArray];
}
