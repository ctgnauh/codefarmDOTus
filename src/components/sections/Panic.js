import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

import ShockedIcon from '@static/icons/shocked.svg';

const WarningTexts = [
  {
    text: 'The server stopped working because of a problem. Press back button or close this tab to exit here.',
  },
  {
    text: `Le serveur a cessé de fonctionner en raison d'un problème. Appuyez sur le bouton de retour ou fermez cet onglet pour quitter ici.`,
  },
  {
    text: 'El servidor dejó de funcionar debido a un problema. Presione el botón Atrás o cierra esta pestaña para salir aquí.',
  },
  {
    text: 'Der Server funktioniert aufgrund eines Problems nicht mehr. Drücken Sie die Zurück-Taste oder Schließen Sie diese Registerkarte, um hier zu beenden.',
  },
  {
    text: '問題のため、サーバーは動作を停止しました。 戻るボタンまたはこのタブを閉じて終了します。',
  },
  {
    text: '服务器因出现问题而停止工作。请按返回键，或直接关闭标签页以离开这里。',
  },
]

const Panic = () => (
  <FullPageWrapper>
    <PanicContainer>
      {WarningTexts.map(({ text }) => (
        <p>
          {text}
        </p>
      ))}
    </PanicContainer>
  </FullPageWrapper>
)

const FullPageWrapper = styled.body`
  background-color: #2d2d2d;
`;

const PanicContainer = styled(Container)`
  background-color: #2d2d2d;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 96px;
  padding-top: 96px;
  background-image: url(${ShockedIcon});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  p {
    color: #f6f6f6;
    font-family: Sans;
    margin-bottom: 20px;
  }
`;

export default Panic;