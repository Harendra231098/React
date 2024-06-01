import { render,screen } from "@testing-library/react";

test("should load contact us component",()=>{ 

    render(<Contact />);

const heading = screen.findByRole("heading");
   expect(heading).toBEInTheDocument();
    
  })