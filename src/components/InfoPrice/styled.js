import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const CoinsArea = styled.div`
    overflow-x: hidden;
`;

export const CoinsList = styled.div`
    display: flex;
    white-space: nowrap;
`;

export const CoinsItem = styled.div`
    display: flex;
    color: #fff;
    text-transform: uppercase;
    padding: 15px;
    border-right: 1px solid #1ED561;

    h5 + h5 {
      margin-left: 10px;
    }
`;
