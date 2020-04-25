import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('../components/Main')
const NewSong = () => import('../components/newsong/NewSong')
const SongList = () => import('../components/song/SongList')
const SingerCategory = () => import('../components/singer/SingerCategory')
const RankList = () => import('../components/rank/RankList')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'NewSong',
          component: NewSong
        },
        {
          path: '/rank/list',
          name: 'RankList',
          component: RankList
        },
        {
          path: '/song/list',
          name: 'SongList',
          component: SongList
        },
        {
          path: '/singer/category',
          name: 'SingerCategory',
          component: SingerCategory
        }
      ]
    }
  ]
})
