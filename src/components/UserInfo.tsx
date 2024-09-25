import React from 'react'
import { ContainerCard, NameText, Progress, UserPicture} from './styles'
import { IUserInfo } from './types'

const  UserInfo = ({name, image, percentual}: IUserInfo) => {
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
