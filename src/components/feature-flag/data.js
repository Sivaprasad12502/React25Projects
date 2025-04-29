const dummyApiResponse = {
  ShowLigthAndDarkMod: true,
  ShowTicTacToeBoard: true,
  ShowRandomColorGenerator: true,
  ShowAccordian: false,
  ShowTreeView: true,
};
function featureFalgsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured!Please try again");
  });
}
export default featureFalgsDataServiceCall;
