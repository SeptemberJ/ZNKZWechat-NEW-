import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGEADDROOMLIST, CHANGESCENEINFO, CHANGEAUTOMATIONINFO } from '../types/counter'

export default handleActions({
  // 创建场景的信息
  [CHANGESCENEINFO] (state, action) {
    // action.payload.type   init-初始化信息为空 scene_icon-修改场景图标  scene_name-修改场景名称 initFill-初始填充场景信息  timing-场景定时 eq_update-设备信息更新
    // action.payload.newInfo
    console.log('CHANGESCENEINFO----------')
    switch (action.payload.type) {
      case 'init':
      return {
        ...state,
        SceneInfo: action.payload.newInfo
      }
      case 'initFill':
      return {
        ...state,
        SceneInfo: action.payload.newInfo
      }
      // return Object.assign({}, state, {
      //   visibilityFilter: action.filter
      // })
      // return { ...state, visibilityFilter: action.filter }
      break
      case 'timing':
      return { ...state, SceneInfo: { ...state.SceneInfo, Scene_timing: action.payload.newInfo }}
      break
      case 'scene_name':
      return { ...state, SceneInfo: { ...state.SceneInfo, Scene_name: action.payload.newInfo }}
      break
      case 'scene_icon':
      return { ...state, SceneInfo: { ...state.SceneInfo, Scene_Room_Icon: action.payload.newInfo }}
      break
      case 'eq_update':
      return { ...state, SceneInfo: { ...state.SceneInfo, Scene_EQList: action.payload.newInfo }}
      break
      case 'zd_update':
      return { ...state, SceneInfo: { ...state.SceneInfo, Scene_AutomaticList: action.payload.newInfo }}
      break
    } 
  },
  // 创建自动化的信息
  [CHANGEAUTOMATIONINFO] (state, action) {
    // action.payload.type   init-初始化信息为空 scene_icon-修改场景图标  scene_name-修改场景名称 initFill-初始填充场景信息  timing-场景定时 eq_update-设备信息更新
    // action.payload.newInfo
    console.log('CHANGEAUTOMATIONINFO----------')
    switch (action.payload.type) {
      case 'init':
      return {
        ...state,
        AutomationInfo: action.payload.newInfo
      }
      case 'initFill':
      return {
        ...state,
        AutomationInfo: action.payload.newInfo
      }
      break
      case 'automation_name':
      return { ...state, AutomationInfo: { ...state.AutomationInfo, AutomaticName: action.payload.newInfo }}
      break
      case 'automation_update_ConditionList':
      return { ...state, AutomationInfo: { ...state.AutomationInfo, ConditionList: action.payload.newInfo }}
      break
      case 'automation_update_ActionList':
      return { ...state, AutomationInfo: { ...state.AutomationInfo, ActionList: action.payload.newInfo }}
      break
    } 
  },
  // 创建家时房间list
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
  urlPre: 'https://jingshangs.com/zk_hky',
  userInfo:{
    nickName: '留白', // '留白'
    phone: '18234567890',
    avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
  },
  addRoomList: [
    {name: '客厅', choosed: true},
    {name: '主卧', choosed: true},
    {name: '次卧', choosed: true},
    {name: '餐厅', choosed: true},
    {name: '厨房', choosed: true},
    {name: '书房', choosed: true}
  ],
  curHome: {id:'ede157a2-f6a1-409c-8f4e-3d549cb12add', name: 'liubai的家'},
  curRoom: {id:0, name: '客厅'},
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
  ],
  CurHomeRole: 1,  //1-管理员 0-家庭成员 3-体验者
  // RoomIconList: [], // 房间icon
  // SceneIconList: [],// 场景icon
  SceneInfo: {         // 某个场景详情
    Scene_name: '',
    Scene_Room_Icon: '', // 场景图片
    Scene_timing: {
      time_start: '',
      time_end: '',
      time_control: ''
    },
    Scene_EQList: [],
    Scene_AutomaticList: [],
    SceneEQCount: 0,  // 加入设备个数
    SceneAutomaticCount: 0 // 加入联动个数
  },
  AutomationInfo: {
    AutomaticName: '',
    ConditionList: [],
    ActionList: []
  }
})