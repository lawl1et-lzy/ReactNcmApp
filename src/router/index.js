import Login from '@/pages/Login'; // 登录页面
import My from '@/pages/My'; // 个人信息
import SongSheet from '@/pages/SongSheet'; // 歌单列表
import SongList from '@/pages/SongList'; // 歌曲列表

let router = [
  {
    path: '/',
    exact: true, // 是否设置为严格模式
    component: SongSheet
  },
  {
    path: '/songlist',
    component: SongList
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/login',
    component: Login
  },
]

export default router

