<template>
  <div class="j_seo_base">
    <div class="j_search">
      <Button class="mormal" @click="change(item.value)" v-for="(item, index) in btns" :key="index" :class="{active: active === item.value}">{{item.text}}</Button>
    </div>
    <Table :columns="columns" :data="list"/>
    <JPagination :fixed="true" :borderTop="true" :total="total" :searchData='searchData' @on-change="get"/>
    <Detail ref="detail"/>
  </div>
</template>

<script>
import qs from 'qs'
import { mapState } from 'vuex'
import JPagination from '@/components/group/j-pagination'
import Detail from '@/pages/static/SeoDetail'
export default {
  components: {
    JPagination,
    Detail
  },
  data () {
    return {
      btns: [
        { text: '导航', value: 'pc' },
        { text: '产品分类', value: 'category/product' },
        { text: '产品', value: 'product/list' },
        { text: '新闻分类', value: 'category/news' },
        { text: '新闻', value: 'news/list' }
      ],
      active: 'pc',
      columns: [
        { type: 'index2', title: '序号', align: 'center', width: 60, render: this.indexFilter },
        { title: '导航名称', key: 'name', render: this.nameFilter },
        { title: '页面地址', key: 'page', render: this.pageFilter },
        { title: '操作', className: 'j_table_operate', width: 100, render: this.renderOperate }
      ],
      list: [
        {}
      ],
      total: 0,
      searchData: {
        page: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    ...mapState(['layoutId', 'lanId', 'staticList'])
  },
  watch: {
    layoutId () {
      if (this.active === 'pc') {
        this.getPcNav()
      }
    },
    lanId () {
      this.get()
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      if (this.active !== 'pc') {
        this.$http.get('/rest/api/' + this.active + '?' + qs.stringify(this.searchData)).then((res) => {
          if (res.success) {
            this.list = res.attributes.data
            this.total = res.attributes.count
          } else {
            this.$Message.error(res.msg)
          }
        })
      } else {
        this.getPcNav()
      }
    },
    getPcNav () {
      if (this.layoutId) {
        this.searchData.layoutId = this.layoutId
        this.staticList.forEach(item => {
          if (item.layoutId === this.layoutId) {
            this.searchData.lanId = item.language
          }
        })
        this.$http.get('/rest/pc/api/navigator/list?' + qs.stringify(this.searchData)).then((res) => {
          if (res.success) {
            this.list = res.attributes.data
            this.total = res.attributes.count
          }
        })
      }
    },
    // 功能
    change (e) {
      this.active = e
      this.searchData.page = 1
      this.get()
      if (e === 'pc') {
        this.$emit('on-change', false)
      } else {
        this.$emit('on-change', true)
      }
    },
    // 过滤
    indexFilter (h, params) {
      return this.index2(this, h, params)
    },
    nameFilter (h, params) {
      return h('span', this.active === 'news/list' ? params.row.title : params.row.name)
    },
    pageFilter (h, params) {
      let href = params.row.page
      let page = params.row.page
      if (this.active === 'category/product') {
        href = 'product-' + params.row.categoryId2 + '-1.html'
        page = 'product-' + params.row.categoryId2 + '-1'
      }
      if (this.active === 'category/news') {
        href = 'news-' + params.row.categoryId2 + '-1.html'
        page = 'news-' + params.row.categoryId2 + '-1'
      }
      if (this.active === 'product/list') {
        href = 'product-detail-' + params.row.productId2 + '.html'
        page = 'product-detail-' + params.row.productId2
      }
      if (this.active === 'news/list') {
        href = 'news-detail-' + params.row.newsId2 + '.html'
        page = 'news-detail-' + params.row.newsId2
      }
      let src = 'http://' + this.$store.state.user.username + '.jihui88.com/' + href
      if (this.active === 'pc') {
        src = 'http://pc.jihui88.com/rest/site/' + this.layoutId + '/' + page
      }
      return h('a', {
        attrs: {
          href: src,
          target: '_blank'
        },
        style: {
          color: '#9b9b9b'
        }
      }, page)
    },
    renderOperate (h, params) {
      return h('a', {
        on: {
          click: () => {
            if (this.active === 'category/product') {
              this.$refs.detail.open(params.row.categoryId, 'cate_product')
            } else if (this.active === 'category/news') {
              this.$refs.detail.open(params.row.categoryId, 'cate_news')
            } else if (this.active === 'product/list') {
              this.$refs.detail.open(params.row.productId, 'product')
            } else if (this.active === 'news/list') {
              this.$refs.detail.open(params.row.newsId, 'news')
            } else {
              this.$refs.detail.open(params.row.id, 'page')
            }
          }
        }
      }, 'SEO')
    }
  }
}
</script>

<style lang="less">
.j_seo {
  .j_layout_content .ivu-layout-content .j_seo_base .ivu-table-body{
    max-height: calc(100vh - 368px);
  }
}
</style>
