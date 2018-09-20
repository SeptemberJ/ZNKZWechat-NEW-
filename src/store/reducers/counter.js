import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT,WXUSERINFO, CHANGEADDROOMLIST, CHANGESCENEINFO, CHANGEAUTOMATIONINFO, UPDATEHOMELIST, UPDATECURHOME, UPDATECURROOMLIST, UPDATECURROOM } from '../types/counter'

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
  // 用户微信信息
  [WXUSERINFO] (state, action) {
    switch (action.payload.type) {
      case 'nickName':
      return {
        ...state,
        userInfo: { ...state.userInfo, nickName: action.payload.newInfo }
      }
      break
      case 'phone':
      return {
        ...state,
        userInfo: { ...state.userInfo, phone: action.payload.newInfo }
      }
      break
      case 'avatarUrl':
      return {
        ...state,
        userInfo: { ...state.userInfo, avatarUrl: action.payload.newInfo }
      }
      break
    }
  },
  // 创建家时房间list
  [CHANGEADDROOMLIST] (state, action) {
    console.log(typeof action.payload)
    if (typeof action.payload === 'object') {
      return {
        ...state,
        addRoomList: action.payload
      }
    } else { // 单独房间添加
      return {
        ...state,
        addRoomList: [...state.addRoomList,{'house_name':action.payload,'choosed': true}]
      }
    }
  },
  // 更新家列表
  [UPDATEHOMELIST] (state, action) {
    return {
      ...state,
      homeList: action.payload
    }
  },
  // 更新当前家
  [UPDATECURHOME] (state, action) {
    return {
      ...state,
      curHome: action.payload
    }
  },
  // 更新当前房间
  [UPDATECURROOM] (state, action) {
    return {
      ...state,
      curRoom: action.payload
    }
  },
  // 更新当前家下房间列表
  [UPDATECURROOMLIST] (state, action) {
    return {
      ...state,
      roomList: action.payload
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
  urlPre: 'http://205.168.1.105:8081/hoxJK', // 'http://192.168.10.174:8081', // 'http://205.168.1.100:8083', 
  // urlPre: 'http://www.smart-hox.com:8081/hoxJK',
  userInfo:{
    nickName: '', // '留白'
    phone: '',
    avatarUrl: ''
  },
  addRoomList: [],
  addRoomList2: [
    {house_name: '客厅', choosed: true},
    {house_name: '主卧', choosed: true},
    {house_name: '次卧', choosed: true},
    {house_name: '餐厅', choosed: true},
    {house_name: '厨房', choosed: true},
    {house_name: '书房', choosed: true}
  ],
  curHome2: {
    faddress: "江苏省南通市海门市北京中路600号",
    home_id: "a12188809f254e989be3cde374a0f076",
    home_name: "11",
    isdefault: "1"
  },
  curHome: {},
  curRoom: {id:0, name: '客厅'},
  homeList: [],
  roomList: [],
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
  },
  curCns: 1 // 命令序号
})