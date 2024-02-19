import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';
import { Item } from '../../Item/Item';
import { Main } from '../../Layouts/Main/Main';
import { ImagesPage } from '../../ImagesPage/ImagesPage';
import { DescriptionPage } from '../../DescriptionPage/DescriptionPage';

export const Home = () => {
  return (
    <>
      <Header>
        <Logo />
        <Navbar>
          <Item content='Entrada de la pagina' />
          <Item content='¿Qué quieres saber?' />
          <Item content='Proyectos para futuro' />
        </Navbar>
      </Header>
      <>
      <ImagesPage />
      </>
      <Main>
        <DescriptionPage><p>Sanrio es una empresa japonesa conocida por crear personajes y franquicias populares, especialmente dirigidas al público infantil, aunque también tienen seguidores de todas las edades alrededor del mundo. La empresa fue fundada en 1960 por Shintaro Tsuji en la ciudad de Tokyo, Japón.</p></DescriptionPage>
      </Main>
    </>
  );
};

