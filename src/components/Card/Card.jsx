import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import Loading from '../Loading'
import * as S from './styled'

function Card({ name, handleChange }) {
  const urlName = `https://img.pokemondb.net/artwork/large/${name}.jpg`
  const urlError = 'https://images.universohq.com/2014/01/pokemon.jpg'

  const image = useRef(null)
  const [valid, setValid] = useState(true)

  const checkValid = () => {
    if (
      !image.current.complete ||
      image.current.naturalWidth < 1 ||
      image.current.naturalHeight < 1
    )
      setValid(false)
  }

  if (valid) {
    return (
      <Link to={`/info/${name}`}>
        <S.ContainerCard onClick={handleChange}>
          <S.CardImg
            data-cy='img-poke'
            src={urlName}
            alt={name}
            ref={image}
            onLoad={checkValid}
            onError={() => setValid(false)}
          />
          <S.CardTitle data-cy='title-poke'>{name}</S.CardTitle>
        </S.ContainerCard>
      </Link>
    )
  }
  return (
    <Link to={`/info/${name}`}>
      <S.ContainerCard onClick={handleChange}>
        <S.ErrorWrapper>
          <S.ErrorImg src={urlError} />
          <S.MsgImgError>Image unavailable</S.MsgImgError>
        </S.ErrorWrapper>
        <S.CardTitle data-cy='title-poke'>{name}</S.CardTitle>
      </S.ContainerCard>
    </Link>
  )
}

export default Card
