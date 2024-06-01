import { render } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "@testing-library/react"; 

//
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render body component with search",async ()=>{ 

    await act(async ()=><Body />);
   
});