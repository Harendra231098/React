import { Provider } from "react-redux";
import RestuarantCard, { withPromotedLable } from "../components/RestuarantCard";
import appStore from "../utils/appStore";
import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom"

const component = (
        <Provider store={appStore}>
        <RestuarantCard resdata={MOCK_DATA} />
        </Provider>
)

it("Should render restuarant card component with props data",()=>{

    render(component);

    const text = screen.getByText("Wrap It - Eat Yummmm!");

    expect(text).toBeInTheDocument;


})

/*it("Should render restuarant card component with promoted label",()=>{

    render(withPromotedLable(<RestuarantCard resdata={MOCK_DATA} />));

    const text = screen.getByText("Cheff Kiss");

    expect(text).toBeInTheDocument;


})*/