import { ASYNC_INCREMENT,WXUSERINFO, CHANGEADDROOMLIST, CHANGESCENEINFO, CHANGEAUTOMATIONINFO, UPDATEHOMELIST, UPDATECURHOME, UPDATECURROOMLIST, UPDATECURROOM } from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const updateHomeList = createAction(UPDATEHOMELIST, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})

export const updateCurHome = createAction(UPDATECURHOME, (info) => {
  console.log('updateCurHome-----------------------')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})

export const updateCurRoom = createAction(UPDATECURROOM, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})

export const updateCurRoomList = createAction(UPDATECURROOMLIST, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(info)
    }, 1000)
  })
})

export const wxUserInfo = createAction(WXUSERINFO, (info) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(info)
      resolve(info)
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