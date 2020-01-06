import styled from 'styled-components'

export const H1 = styled.h1`
	color: var(--neu-01);
	font-family: Montserrat;
	font-size: 60px;
	font-weight: bold;
	line-height: 64px;
`;

export const H2 = styled.h2`
	color: ${props => props.white ? 'var(--neu-01)' : 'var(--neu-06)'};
	font-family: Montserrat;
	font-size: 40px;
	font-weight: bold;
  line-height: 64px;
  padding-bottom: 32px;
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
`;
export const H3 = styled.h3`
	color: var(--m-01);
	font-family: Montserrat;
	font-size: 24px;
	font-weight: bold;
	line-height: 30px;
`;
export const Body = styled.p`
	color: ${props => props.white ? 'var(--neu-01)' : 'var(--neu-06)'};
	font-family: Montserrat;
	font-size: 21px;
	line-height: 30px;
`;
export const BodySmall = styled.p`
  color: var(--neu-06);
	font-family: Montserrat;
	font-size: 18px;
	line-height: 26px;
`;