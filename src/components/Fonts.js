import styled from 'styled-components'

export const H1 = styled.h1`
	color: var(--neu-01);
	font-family: Montserrat;
	font-size: 60px;
	font-weight: 700;
  line-height: 64px;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    line-height: 51px;
  }
`;

export const H2 = styled.h2`
	color: ${props => props.white ? 'var(--neu-01)' : 'var(--neu-06)'};
	font-family: Montserrat;
	font-size: 40px;
	font-weight: 700;
  line-height: 64px;
  padding-bottom: 40px;
  &:after {
    content: '';
    height: 6px;
    width: 72px;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.white ? 'var(--neu-01)' : 'var(--m-01)'}
  }
  @media screen and (max-width: 1024px) {
    font-size: 34px;
    &:after {
      width: 18px;
    }
  }
`;
export const H3 = styled.h3`
	color: var(--m-01);
	font-family: Montserrat;
	font-size: 24px;
	font-weight: 700;
	line-height: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 21px;
    line-height: 30px;
  }
`;
export const Body = styled.p`
	color: ${props => props.white ? 'var(--neu-01)' : 'var(--neu-06)'};
	font-family: Montserrat;
	font-size: 21px;
	line-height: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
export const BodySmall = styled.p`
  color: ${props => props.white ? 'var(--neu-04)' : 'var(--neu-06)'};
	font-family: Montserrat;
	font-size: 16px;
	line-height: 26px;
`;

export const ButtonText = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -1px;
  line-height: 30px;
`;