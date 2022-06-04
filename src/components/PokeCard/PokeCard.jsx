import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

import * as S from './styled'

function Card({ poke }) {
  const urlError = 'https://images.universohq.com/2014/01/pokemon.jpg'
  const navigate = useNavigate()
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
    if (!poke) {
      return <Loading />
    }
    return (
      <S.ContainerCard
        data-cy='card-newpoke'
        onClick={() => navigate(`/pokenew/${poke._id}`)}
      >
        <S.CardImg
          data-cy='img-newpoke'
          src={poke.url}
          alt={poke.name}
          ref={image}
          onLoad={checkValid}
          onError={() => setValid(false)}
        />
        <S.CardTitle data-cy='title-newpoke'>{poke.name}</S.CardTitle>
      </S.ContainerCard>
    )
  }
  return (
    <S.ContainerCard
      data-cy='card-newpoke'
      onClick={() => navigate(`/pokenew/${poke._id}`)}
    >
      <S.ErrorWrapper>
        <S.ErrorImg src={urlError} />
        <S.MsgImgError>Image unavailable</S.MsgImgError>
      </S.ErrorWrapper>
      <S.CardTitle data-cy='title-newpoke'>{poke.name}</S.CardTitle>
    </S.ContainerCard>
  )
}

export default Card
