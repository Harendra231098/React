import { render,screen,fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

const component = ( <BrowserRouter>
                    <   Provider store={appStore}>
                            <Header />
                        </Provider>
                    </BrowserRouter>);

it("Should render header component with login button",()=>{

    render(component);

    const loginBtn = screen.getByRole("button",{name:'Login'})
    expect(loginBtn).toBeInTheDocument();
})

it("should render header components with cart items zero",()=>{

   render(component);
 
   const item = screen.getByText("🛒(0)")
    
    expect(item).toBeInTheDocument();

})

it("Should change login button to logout on click",()=>{
    render(component);
 
    const loginBtn = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginBtn);

    const logoutBtn =screen.getByRole("button",{name:"Logout"});

    expect(logoutBtn).toBeInTheDocument();

})