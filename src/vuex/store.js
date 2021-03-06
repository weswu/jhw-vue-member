import Vue from 'vue'
import Vuex from 'vuex'
import status from './status'
import qs from 'qs'
Vue.use(Vuex)

const state = {
  user: {
    name: '未登录',
    username: '未登录',
    headimg: '',
    addTime: 1272102123858,
    enterprise: {}
  },
  userInfo: {
    noReaderMsg: 0
  },
  lanId: '1',
  uid: ['0', '0', '0'],
  loading: false,
  // 列表数据
  productCategory: [],
  newsCategory: [],
  albumCategory: [],
  memberRankList: [],
  memberAttrList: [],
  tagList: [],
  areaList: [],
  userprivilege: [],
  // 站点
  staticList: [],
  layoutId: '',
  win: '', // 小于400的窗口
  agent: { // 经销商
    // agentId: 'cc',
    bindUrl: 'www.jihui88.com',
    manageLogo1: '',
    vManage: 'http://v.qq.com/vplus/4aa13bffe0e2662991069f1800862a96/foldervideos/gr2002901enccnk',
    vAccount: 'https://v.qq.com/x/page/c0753vzonsm.html',
    vProduct: 'https://v.qq.com/x/page/w0753bnm9kh.html',
    vProductCategory: 'https://v.qq.com/x/page/e0753kcg4xb.html',
    vImport: 'https://v.qq.com/x/page/j0753rag7kr.html',
    vDownload: 'https://v.qq.com/x/page/n0753o7p54m.html',
    vNews: 'https://v.qq.com/x/page/q0753wldx5d.html',
    vNewsCategory: 'https://v.qq.com/x/page/g075303kosj.html',
    vWebsite: 'https://v.qq.com/x/page/f0753d6r4fb.html',
    vSeo: 'https://v.qq.com/x/page/u0753y5akkv.html',
    vSitemap: 'https://v.qq.com/x/page/l0753l1jw2c.html',
    vSeoBatch: 'https://v.qq.com/x/page/u0753ji3n5n.html',
    vAnalysis: 'https://v.qq.com/x/page/j0753ycgfeh.html',
    dNews: 'http://xueyuan.jihui88.com/news.html',
    dLog: '#/update',
    vDesign: 'http://v.qq.com/vplus/4aa13bffe0e2662991069f1800862a96/foldervideos/ja70029011ynh0d',
    miniprogramcode: 'http://www.jihui88.com/manage_v4/platform/img/app.png',
    wxappBanner: '',
    user: {
      qq: '1550676880',
      cellphone: '13967938189',
      enterprise: {
        name: '机汇网'
      },
      enterpriseId: 'Enterp_0000000000000000000064700'
    }
  },
  // 记录操作习惯
  customData: {
    yindao: false,
    isCollapsed: true,
    linkList: [
      { value: 'static', text: '站点数据管理', icon: 'icon-shuju' },
      { value: 'member', text: '会员管理', icon: 'icon-Group' },
      { value: 'product', text: '产品列表', icon: 'icon-liebiao1' }
    ],
    productShow: ['序号', '产品图片', '产品名称', '产品型号', '产品分类', '添加时间', '显示／隐藏', '排序', '二维码'],
    shopShow: ['序号', '订单编号', '用户名', '订单总额', '订单状态', '付款状态', '配送状态', '支付方式', '配送方式', '下单时间'],
    homeSort: [
      { value: 'static', text: '我的网站', status: '01', type: '01' },
      { value: 'link', text: '链接', status: '01', type: '00' },
      { value: 'order', text: '订单', status: '01', type: '01' },
      { value: 'message', text: '留言', status: '00', type: '01' },
      { value: 'service', text: '服务', status: '00', type: '01' }
    ],
    mobileLink: [
      {url: '/pages/order/order', text: '订单管理', icon: 'icon-dingdandaifukuan'},
      {url: '/pages/member/member', text: '会员管理', icon: 'icon-Group'}
    ],
    mobileSort: [
      {text: '我的产品', value: 'product', checked: true},
      {text: '订单管理', value: 'order', checked: true},
      {text: '常用工具', value: 'tool', checked: true},
      {text: '数据管理中心', value: 'data', checked: true}
    ]
  }
}

const getters = {
  user: state => state.user,
  userInfo: state => state.userInfo,
  lanId: state => state.lanId,
  loading: state => state.loading,
  // 分类
  productCategory: state => state.productCategory,
  newsCategory: state => state.newsCategory,
  albumCategory: state => state.albumCategory,
  // 列表
  memberRankList: state => state.memberRankList,
  memberAttrList: state => state.memberAttrList,
  tagList: state => state.tagList,
  areaList: state => state.areaList,
  userprivilege: state => state.userprivilege,
  // 站点
  staticList: state => state.staticList,
  layoutId: state => state.layoutId,
  win: state => state.win,
  agent: state => state.agent,
  customData: state => state.customData
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLoading (state, loading) {
    state.loading = loading
  },
  setAccountInfo (state, data) {
    state.user.headimg = data.headimg
  },
  setProductCategory (state, productCategory) {
    state.productCategory = productCategory
  },
  setNewsCategory (state, newsCategory) {
    state.newsCategory = newsCategory
  },
  setAlbumCategory (state, albumCategory) {
    state.albumCategory = albumCategory
  },
  setMemberRankList (state, memberRankList) {
    state.memberRankList = memberRankList
  },
  setMemberAttrList (state, memberAttrList) {
    state.memberAttrList = memberAttrList
  },
  setTagList (state, tagList) {
    state.tagList = tagList
  },
  setAreaList (state, areaList) {
    state.areaList = areaList
  },
  setUserprivilege (state, userprivilege) {
    state.userprivilege = userprivilege
  },
  setStaticList (state, staticList) {
    state.staticList = staticList
  },
  setLayoutId (state, layoutId) {
    state.layoutId = layoutId
  },
  setLanId (state, lanId) {
    state.lanId = lanId
  },
  setWin (state, win) {
    state.win = win
  },
  setAgent (state, agent) {
    state.agent = agent
  },
  setCustomData (state, customData) {
    state.customData = customData
  },
  // 全局唯一标识
  nextUid (state) {
    let index = state.uid.length
    let digit
    while (index) {
      index--
      digit = state.uid[index].charCodeAt(0) // 从低位开始循环
      if (digit === 57) { //  /*'9'*/如果低位计算到了9，改位从A开始计算
        state.uid[index] = 'A'
        return
      }
      if (digit === 90) { //   /*'Z'*/如果该位计算到Z，则从0开始计算
        state.uid[index] = '0'
      } else {
        state.uid[index] = String.fromCharCode(digit + 1) // 下一个字符
        return
      }
      if (index === 1) {
        state.uid.unshift('0') // 如果每位字符上的都发生了改变，则在高位前面用‘0’补充
      }
    }
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {
    getUser ({commit, state}) {
      return this._vm.$http.get('/rest/api/user/detail').then((res) => {
        if (res.success) {
          let data = res.attributes.data
          if (data) {
            data.enterprise = state.user.enterprise
            if (!state.user.headimg) this.dispatch('getAccountInfo', data.userId)
            data.headimg = ''
          }
          this.commit('setUser', data || {
            name: '未登录',
            username: '未登录',
            headimg: '',
            addTime: 1272102123858,
            enterprise: {}
          })
          if (state.staticList.length === 0) this.dispatch('getStaticList')
        } else {
          res.msg && this._vm.$Message.error(res.msg)
        }
      })
    },
    getEnterprise ({commit, state}) {
      return this._vm.$http.get('/rest/api/enterprise/detail').then((res) => {
        if (res.success) {
          let data = res.attributes.data
          data.addresslist = !data.address ? ['8a9e457e63a5e4c00163a5fa47ca0008'] : data.address.split(',')
          state.user.enterprise = data
          this.commit('setUser', state.user)
        }
      })
    },
    getUserInfo ({commit, state}) {
      this._vm.$http.get('/rest/api/user/index').then((res) => {
        if (res.success) {
          this.commit('setUserInfo', res.attributes.data)
        }
      })
    },
    getAccountInfo ({commit, state}, id) {
      this._vm.$http.get('/rest/api/user/accountInfo/' + id).then((res) => {
        if (res.success) {
          this.commit('setAccountInfo', res.attributes.data)
        }
      })
    },
    getCategory ({commit, state}, type) {
      return this._vm.$http.get('/rest/api/category/' + type + '?pageSize=1000').then(res => {
        if (res.success) {
          let data = res.attributes.data
          let list = []
          // 1级
          data.forEach(item => {
            if (!item.belongId) {
              item.isroot = false // 根目录和三角
              item._checked = false
              item.expand = false // 三角图标展开-关闭
              item.bg = false // 层级背景颜色
              item.grade = '1'
              item.edittingCell = {
                sort: false,
                api: 'category',
                id: item.categoryId
              }
              list.push(item)
            }
          })
          // 2级
          data.forEach(row => {
            list.forEach((item, index) => {
              if (item.grade === '1' && (row.belongId === item.categoryId)) {
                item.isroot = true
                row.isroot = false
                row._checked = false
                row.hidden = true // 显示隐藏
                row.expand = false
                row.bg = false
                row.grade = '2'
                row.edittingCell = {
                  sort: false,
                  api: 'category',
                  id: row.categoryId
                }
                list.splice(index + 1, 0, row)
              }
            })
          })
          // 3级
          data.forEach(row => {
            list.forEach((item, index) => {
              if (item.grade === '2' && (row.belongId === item.categoryId)) {
                item.isroot = true
                row.isroot = false
                row._checked = false
                row.hidden = true
                row.bg = false
                row.grade = '3'
                row.edittingCell = {
                  sort: false,
                  api: 'category',
                  id: row.categoryId
                }
                list.splice(index + 1, 0, row)
              }
            })
          })
          if (list.length > 0) {
            if (list[0].type === '10') this.commit('setProductCategory', list)
            if (list[0].type === '11') this.commit('setNewsCategory', list)
          } else {
            this.commit('setProductCategory', [])
            this.commit('setNewsCategory', [])
          }
        }
      })
    },
    getAlbumCategory ({commit, state}) {
      return this._vm.$http.get('/rest/api/album/list?page=1&pageSize=1000').then(res => {
        if (res.success) {
          this.commit('setAlbumCategory', res.attributes.data)
        }
      })
    },
    getTagList ({commit, state}) {
      this._vm.$http.get('/rest/api/tag/list?pageSize=1000').then(res => {
        if (res.success) {
          let data = res.attributes.data
          data.forEach(item => {
            item._checked = false
          })
          this.commit('setTagList', data)
        }
      })
    },
    getAreaList ({commit, state}) {
      this._vm.$http.get('/rest/api/area/list').then((res) => {
        if (res.success) {
          let area = res.attributes.data
          let data = []
          area.forEach(item => {
            if (item.level === 0) {
              data.push({
                value: item.areaId,
                label: item.name,
                children: []
              })
            }
          })
          area.forEach(item => {
            if (item.level === 1) {
              data.forEach(row => {
                if (row.value === item.belongId) {
                  row.children.push({
                    value: item.areaId,
                    label: item.name,
                    children: []
                  })
                }
              })
            }
          })
          area.forEach(item => {
            if (item.level === 2) {
              data.forEach(row => {
                row.children.forEach(item2 => {
                  if (item2.value === item.belongId) {
                    item2.children.push({
                      value: item.areaId,
                      label: item.name
                    })
                  }
                })
              })
            }
          })
          this.commit('setAreaList', data)
        }
      })
    },
    getMemberRank ({commit, state}) {
      return this._vm.$http.get('/rest/api/member/rank/list').then(res => {
        if (res.success) {
          this.commit('setMemberRankList', res.attributes.data)
        }
      })
    },
    getMemberAttr ({commit, state}) {
      return this._vm.$http.get('/rest/api/member/attr/list').then(res => {
        if (res.success) {
          let data = res.attributes.data
          data.forEach(item => {
            item.edittingCell = {
              sort: false,
              api: 'member/attr',
              id: item.attId
            }
          })
          this.commit('setMemberAttrList', data)
        }
      })
    },
    getUserprivilege ({commit, state}) {
      return this._vm.$http.get('/rest/api/userprivilege/list?version=v4').then(res => {
        if (res.success) {
          this.commit('setUserprivilege', res.attributes.data)
        }
      })
    },
    getStaticList ({commit, state}) {
      return this._vm.$http.get('/rest/pc/api/baseLayout/list?page=1&pageSize=100&sortType=desc').then(res => {
        if (res.success) {
          this.commit('setStaticList', res.attributes.data)
          if (res.attributes.data.length > 0) {
            let id = res.attributes.data[0].id
            res.attributes.data.forEach(item => {
              if (item.id === window.localStorage.getItem('layoutId')) {
                id = window.localStorage.getItem('layoutId')
              }
            })
            this.commit('setLayoutId', id)
          }
        }
      }).catch(e => {
        // 异常情况
        this.dispatch('getStaticList')
      })
    },
    getCustomData ({commit, state}) {
      this._vm.$http.get('/rest/api/custom/detail').then(res => {
        if (res.success) {
          let data = res.attributes.data
          if (data.content) {
            let content = JSON.parse(data.content)
            // 处理默认数据
            if (!content.linkList) {
              content.linkList = [
                { value: 'static', text: '站点数据管理', icon: 'icon-shuju' },
                { value: 'member', text: '会员管理', icon: 'icon-Group' },
                { value: 'product', text: '产品列表', icon: 'icon-liebiao1' }
              ]
            }
            if (!content.productShow) {
              content.productShow = ['序号', '产品图片', '产品名称', '产品型号', '产品分类', '添加时间', '显示／隐藏', '排序', '二维码']
            }
            if (!content.shopShow) {
              content.shopShow = ['序号', '订单编号', '用户名', '订单总额', '订单状态', '付款状态', '配送状态', '支付方式', '配送方式', '下单时间']
            }
            if (!content.homeSort) {
              content.homeSort = [
                { value: 'static', text: '我的网站', status: '01', type: '01' },
                { value: 'link', text: '链接', status: '01', type: '00' },
                { value: 'order', text: '订单', status: '01', type: '01' },
                { value: 'message', text: '留言', status: '00', type: '01' },
                { value: 'service', text: '服务', status: '00', type: '01' }
              ]
            }
            // 语言设置
            if (content.lanList) {
              let lans = content.lanList.split(',')
              let lanLst = [
                { value: '1', text: '中文', type: 'cn' },
                { value: '2', text: '英文', type: 'en' },
                { value: '3', text: '日语', type: 'ja' },
                { value: '4', text: '韩语', type: 'ko' },
                { value: '5', text: '德语', type: 'de' },
                { value: '6', text: '法语', type: 'fr' },
                { value: '7', text: '西班牙语', type: 'es' },
                { value: '8', text: '俄语', type: 'ru' },
                { value: '9', text: '阿拉伯语', type: 'ar' }
              ]
              let list = []
              lans.forEach(item => {
                list.push(lanLst[item - 1])
              })
              this.commit('status/setLanList', list)
              if (content.lanList.indexOf(state.lanId) === -1) {
                this.commit('setLanId', lans[0])
              }
            }
            this.commit('setCustomData', content)
          }
        }
      })
    },
    lanIdChange ({dispatch, commit}, lanId) {
      window.localStorage.setItem('lanId', lanId)
      return this._vm.$http.get('/rest/api/user/changeLan?lanId=' + lanId).then((res) => {
        if (res.success) {
          // this.dispatch('getEnterprise')
        } else {
          this._vm.$Message.error(res.msg)
        }
      })
    },
    SAVE_CUSTOM_DATA ({commit, state}) {
      this._vm.$http.post('/rest/api/custom/update', qs.stringify({content: JSON.stringify(state.customData)})).then(res => {
        if (res.success) {
          console.log('自定义数据保存成功')
        } else {
          console.log(res.msg)
        }
      })
    },
    getAgent ({commit, state}) {
      return this._vm.$http.get('/rest/api/agent/config/getConfigByDomain?domain=' + location.host).then(res => {
        if (res.success) {
          let data = res.attributes.data
          if (data) {
            let video = {}
            if (data.manageVideoLink) {
              video = JSON.parse(data.manageVideoLink)
            }
            data = Object.assign(data, video)
            if (data.miniprogramcode) {
              data.miniprogramcode = 'http://img.jihui88.com/' + data.miniprogramcode
            } else {
              data.miniprogramcode = ''
            }
            this.commit('setAgent', data)
          }
        }
      })
    }
  },
  modules: {
    status
  }
})

export default store
