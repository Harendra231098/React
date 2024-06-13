import React from 'react'
import { Button } from './Button'

//const list = ["All", "Live", "Gaming"]

export const ButtonList = () => {
  return (
    <div className='flex'> 

      <Button  name="All" />
      <Button  name="Gaming" />
      <Button  name="Songs" />
      <Button  name="Live" />
      <Button  name="Cricket" />
      <Button  name="Cooking" />
      <Button  name="Soccer" />
      <Button  name="News" />
      <Button  name="BaseBall" />
      <Button  name="Technology" />

    </div>
  )
}
