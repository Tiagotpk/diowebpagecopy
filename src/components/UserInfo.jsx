import React from 'react'
import { ContainerCard, NameText, Progress, UserPicture} from './styles'

const  UserInfo = ({name, image, percentual}) => {
  return (
    <ContainerCard>
      <UserPicture src={image}/>
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual}/>
      </div>
    </ContainerCard>
  )
}

export  {UserInfo}
