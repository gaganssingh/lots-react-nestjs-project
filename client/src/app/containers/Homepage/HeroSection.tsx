import styled from "styled-components";
import tw from "twin.macro";
import BlobImage from "../../../assets/images/blob.svg";
import HeroImage from "../../../assets/images/mclaren-orange-big.png";
import { Button } from "../../components/Button";
import { SCREEN_SIZES } from "../../components/responsive";

const HeroContainer = styled.div`
  min-height: 300px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const HeroText = styled.h1`
  ${tw`
    font-bold
    text-2xl
    sm:text-3xl
    md:text-5xl
    xl:text-6xl
    md:font-extrabold
    lg:font-black
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const HeroDescription = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    mt-4
    flex-wrap
  `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREEN_SIZES.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREEN_SIZES.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREEN_SIZES.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const HeroImageContainer = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREEN_SIZES.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREEN_SIZES.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREEN_SIZES.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

export const HeroSection = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <HeroText>Rent the most exclusive cars</HeroText>
        <HeroDescription>
          We have only the best customer service, and the best cars in the
          industry!
        </HeroDescription>
        <ButtonsContainer>
          <Button text="Request Consultation" theme="filled" />
          <Button text="Book Now" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImage} alt="" />
        </BlobContainer>
        <HeroImageContainer>
          <img src={HeroImage} alt="An orange Maclaren P1" />
        </HeroImageContainer>
      </RightContainer>
    </HeroContainer>
  );
};
