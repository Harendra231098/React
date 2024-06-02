import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test case",()=>{
test("should load contact  component",()=>{ 

    render(<Contact />);

const heading = screen.getByRole('heading');

expect(heading).toBeInTheDocument();

    
  });

  test("should load button inside a contact component",()=>{ 

    render(<Contact />);

const button = screen.getByRole('button');

expect(button).toBeInTheDocument();

    
  });

  it("should check for text 'Submit' in contact component ",()=>{
    render(<Contact />);

    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();       
  });

  test("should check for 'name ' placeholder in contact component ",()=>{
    render(<Contact />);

    const text = screen.getByPlaceholderText("name");

    expect(text).toBeInTheDocument();       
  })

  test("should load 2 input boxes on contact component",()=>{
    render(<Contact />)
    const boxes = screen.getAllByRole("textbox");
    expect(boxes.length).toBe(2);
  })
})