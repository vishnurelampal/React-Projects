import Body from "../Body";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MOCK_DATA } from "../../utils/mockData/MOCK_DATA";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import ResCard from "../ResCard";
import { mockResData } from "../../utils/mockData/mockResData.json";
import { UserContext } from "../../utils/Context/useContext";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
// it("Should render Body", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         {/* <Body /> */}
//         <ResCard res={MOCK_DATA} />
//       </BrowserRouter>
//     )
//   );
// });

it("Should render res cards", () => {
  render(<ResCard resData={mockResData} />);
});

const resCheck = screen.getByRole("img");
console.log(resCheck);
expect(resCheck).toBeInTheDocument();
