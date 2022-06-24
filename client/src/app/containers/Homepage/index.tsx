import styled from "styled-components";
import tw from "twin.macro";
import { BookingCard } from "../../components/BookingCard";
import { Marginer } from "../../components/Marginer";
import { Navbar } from "../../components/Navbar";
import { BookingInfo } from "./BookingInfo";
import { HeroSection } from "./HeroSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export const Homepage = () => {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <Marginer direction="vertical" margin="0.5em" />
      <BookingCard />
      <Marginer direction="vertical" margin="6em" />
      <BookingInfo />
    </PageContainer>
  );
};
