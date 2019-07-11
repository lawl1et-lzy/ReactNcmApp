import Login from '@/pages/Login'; // 登录页面
import My from '@/pages/My'; // 个人信息
import SongSheet from '@/pages/SongSheet'; // 歌单列表
import SongList from '@/pages/SongList'; // 歌曲列表

let router = [
  {
    path: '/',
    exact: true, // 是否设置为严格模式
    name: '我的',
    footerObj: {
      show: true,
      icon: 'circle-o',
      actIcon: 'circle'
    },
    component: SongSheet
  },
  {
    path: '/songlist/:id',
    name: '列表',
    component: SongList
  },
  {
    path: '/my',
    name: '账号',
    footerObj: {
      show: true,
      icon: 'square-o',
      actIcon: 'square'
    },
    component: My
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
]

export default router

