import { ASYNC_INCREMENT, CHANGEADDROOMLIST } from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const changeAddRoomList = createAction(CHANGEADDROOMLIST, (name) => {
  return new Promise(resolve => {
    setTimeout(() => {
    	console.log(name)
      resolve(name)
    }, 1000)
  })
})