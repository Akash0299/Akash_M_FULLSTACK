import { render ,screen,console} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from './ContactUs'

describe("ContactUs", () => {
    test("Component renders",()=>{
        render(<ContactUs/>);
    })
    test("Heading displays",()=>{
        render(<ContactUs />);
        expect(screen.getByTestId("headd")).toHaveTextContent("24x7 Customer Care Support");
    })
})