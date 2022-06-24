import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { Homepage } from "./app/containers/Homepage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

export const App = () => {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  );
};
