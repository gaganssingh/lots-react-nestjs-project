import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREEN_SIZES } from "../../components/responsive";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-6
  `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const AllItemsContainer = styled.div`
  ${tw`
    flex
    flex-col
    
    gap-10
    justify-evenly
    flex-wrap
    mt-7
  `}

  @media (min-width: ${SCREEN_SIZES.md}) {
    ${tw`
      flex-row
      mt-16
    `}
  }
`;

const InfoContainer = styled.div`
  box-shadow: 0 1.3px 12px -4px rgba(0, 0, 0, 0.4);
  ${tw`
    rounded-2xl
    flex
    flex-col
    md:w-96
    p-6
    items-center
    transition-colors
    hover:text-red-500  
  `}
`;

const Info = styled.div`
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `}
`;

const InfoTitle = styled.h4`
  ${tw`
    text-gray-900
    text-lg
    font-semibold
    mt-4
  `}
`;

const InfoDescription = styled.p`
  ${tw`
  w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `}
`;

export const BookingInfo = () => {
  return (
    <Container>
      <Title>How this works?</Title>
      <AllItemsContainer>
        <InfoContainer>
          <Info>
            <Icon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </Icon>
          </Info>
          <InfoTitle>Choose Location</InfoTitle>
          <InfoDescription>Find the closest Lots location</InfoDescription>
        </InfoContainer>
        <InfoContainer>
          <Info>
            <Icon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
          </Info>
          <InfoTitle>Choose Date</InfoTitle>
          <InfoDescription>
            Select a convenient date to start your rental
          </InfoDescription>
        </InfoContainer>
        <InfoContainer>
          <Info>
            <Icon>
              <FontAwesomeIcon icon={faCarSide} />
            </Icon>
          </Info>
          <InfoTitle>Finalize Booking</InfoTitle>
          <InfoDescription>
            Confirm your booking with our system
          </InfoDescription>
        </InfoContainer>
      </AllItemsContainer>
    </Container>
  );
};
