import React from 'react';

import { ProductsWrapper } from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>A Igreja</h3>
          <p>Plataforma completa da IPB em glória</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>EBD</h3>
          <p>Escola bíblica dominical</p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Conheça-nos</h3>
          <p>Conheça a Igreja prebisteriana em Glória-SE</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Sigma</h3>
        <p>Análises e relatórios comerciais avançados</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Atlas</h3>
        <p>Registro de empresas para startups</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Radar</h3>
        <p>Prevenção de fraudes com machine learning</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Issuing</h3>
        <p>Criação de cartões virtuais e físicos</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Terminal</h3>
        <p>Pagamentos pessoais programáveis</p>
      </li>
    </ul>
  </ProductsWrapper>
);