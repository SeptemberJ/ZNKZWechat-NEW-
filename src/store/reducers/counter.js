import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGEADDROOMLIST } from '../types/counter'

export default handleActions({
  [CHANGEADDROOMLIST] (state, action) {
    return {
      ...state,
      addRoomList: [...state.addRoomList,{'name':action.payload,'choosed': true}]
    }
  },
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  addRoomList: [
    {name: '客厅', choosed: true},
    {name: '主卧', choosed: true},
    {name: '次卧', choosed: true},
    {name: '餐厅', choosed: true},
    {name: '厨房', choosed: true},
    {name: '书房', choosed: true}
  ],
  curHome: {id:0, name: 'liubai的家'},
  homeList: [
    {id:0, name: 'liubai的家'},
    {id:1, name: 'liubai的家2'},
    {id:2, name: 'liubai的家3'}
  ],
  roomList: [
    {id:0, name: '客厅'},
    {id:1, name: '主卧'},
    {id:2, name: '次卧'},
    {id:3, name: '餐厅'},
    {id:4, name: '厨房'},
    {id:5, name: '书房'}
  ]
})