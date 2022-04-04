import { render ,screen} from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("AboutUs", () => {
    test("Component renders",()=>{
        render(<AboutUs />);
    })
    test("Heading should display",()=>{
        render(<AboutUs />);
        expect(screen.getByTestId("headd")).toHaveTextContent("The One-stop Shopping Destination");
    })
})