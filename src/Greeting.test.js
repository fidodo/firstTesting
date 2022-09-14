import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting component", () => {
    test("renders hello world", () => {
        render(<Greeting />);
        const text = screen.getByText("Hello World", {exact:true})
        expect(text).toBeInTheDocument();
    })

    test("renders its good to see you if button not clicked", ()=>{
        render(<Greeting />)
        const text = screen.getByText("it's good to see you");
        expect(text).toBeInTheDocument()
    })

    test("renders Changed if button clicked", () =>{
        render(<Greeting />)
        const button = screen.getAllByRole("button");

        userEvent.click(button)
        const text = screen.getByText("changed")
        expect(text).toBeInTheDocument()

        test("does not renders it is good to see you if button clicked", () =>{
            render(<Greeting />)
            const button = screen.getByRole

            userEvent.click(button)
            const text = screen.getByText("changed!");
            expect(text).toBeInTheDocument()
        })
    })
})