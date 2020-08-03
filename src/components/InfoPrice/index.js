import React, { useState, useEffect } from 'react';
import Marquee from "react-marquee-slider";

import apiCoins from '../../api/apiMoedas';

import {
  Container,
  CoinsArea,
  CoinsList,
  CoinsItem
} from './styled';

export default () => {

  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {

    const getAllCoin = async () => {
      const coin = await apiCoins.getAllCoins();
      setAllCoins(coin);
    }
    getAllCoin();

  }, []);

  return (
    <Container>

      <CoinsArea>
        <CoinsList>
          <Marquee velocity={40} minScale={0.7} >
            {Object.keys(allCoins).map((coin, index) => (

              <CoinsItem key={index}>
                <h5>{allCoins[coin].name}:</h5>
                <h5>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(allCoins[coin].bid)}</h5>
              </CoinsItem>

            ))}
          </Marquee>
        </CoinsList>
      </CoinsArea>

    </Container>
  );
}
