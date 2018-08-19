import { ASYNC_INCREMENT, CHANGEADDROOMLIST, CHANGESCENEINFO, CHANGEAUTOMATIONINFO } from '../types/counter'
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

export const changeSceneInfo = createAction(CHANGESCENEINFO, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})

export const changeAutomationInfo = createAction(CHANGEAUTOMATIONINFO, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})