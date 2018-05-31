// 存放各种常量
const state = {
  IMG_HOST: 'http://img.jihui88.com/',
  lanList: [
    { value: '1', text: '中文' },
    { value: '2', text: '英文' }
  ],
  // 会员属性
  memberAttrList: [
    { text: '文本', value: 'text' },
    { text: '数字', value: 'number' },
    { text: '字母', value: 'alphaint' },
    { text: '单选项', value: 'select' },
    { text: '多选项', value: 'checkbox' },
    { text: '日期', value: 'date' }
  ],
  // 付款状态
  paymentStatus: [
    { text: '未支付', value: 'unpaid', html: '<span style="color: #d0021b;">未支付</span>' },
    { text: '部分支付', value: 'partPayment', html: '<span style="color: #ff7e3e;">部分支付</span>' },
    { text: '已支付', value: 'paid', html: '<span style="color: #417505;">已支付</span>' },
    { text: '部分退款', value: 'partRefund', html: '<span style="color: #ff7e3e;">部分退款</span>' },
    { text: '全额退款', value: 'refunded', html: '<span style="color: #000000;">全额退款</span>' }
  ],
  // 配送状态
  shippingStatus: [
    { text: '未发货', value: 'unshipped', html: '<span style="color: #d0021b;">未发货</span>' },
    { text: '部分发贫', value: 'partShipped', html: '<span style="color: #ff7e3e;">部分发贫</span>' },
    { text: '已发货', value: 'shipped', html: '<span style="color: #417505;">已发货</span>' },
    { text: '部分退货', value: 'partReshiped', html: '<span>部分退货</span>' },
    { text: '已退货', value: 'reshiped', html: '<span>已退货</span>' }
  ],
  // 订单状态
  orderStatus: [
    { text: '未处理', value: 'unprocessed', html: '<span style="color: #d0021b;">未处理</span>' },
    { text: '已处理', value: 'processed', html: '<span style="color: #417505;">已处理</span>' },
    { text: '已完成', value: 'completed', html: '<span style="color: #5b5b5b;">已完成</span>' },
    { text: '已作废', value: 'invalid', html: '<span style="color: #a0a0a0;">已作废</span>' },
    { text: '已取消', value: 'cancel', html: '<span style="color: #d0021b;">已取消</span>' }
  ],
  // 退货类型
  disputeType: [
    { text: '仅退款 ', value: 'onlymoney' },
    { text: '退款并退货 ', value: 'goodandmoney' }
  ],
  // 退货状态
  disputeState: [
    { text: '未处理 ', value: 'unprocessed', html: '<span style="color: #d0021b;">未处理</span>' },
    { text: '处理中 ', value: 'processed', html: '<span style="color: #ff7e3e;">处理中</span>' },
    { text: '已退款 ', value: 'returned', html: '<span style="color: #417505;">已退款</span>' },
    { text: '已拒绝 ', value: 'invalid', html: '<span style="color: #417505;">已拒绝</span>' },
    { text: '已完成 ', value: 'completed', html: '<span style="color: #417505;">已完成</span>' },
    { text: '已关闭 ', value: 'closed', html: '<span style="color: #a0a0a0;">已关闭</span>' }
  ],
  // 支付方式(管理员自己设置的支付方式)
  paymentType: [
    { text: '预存款支付', value: 'deposit' },
    { text: '在线充值', value: 'recharge' },
    { text: '线下支付', value: 'offline' },
    { text: '在线支付', value: 'online' }
  ],
  // 订单日志状态
  orderLogType: [
    { text: '订单创建', value: 'create' },
    { text: '订单修改', value: 'modify' },
    { text: '订单支付', value: 'payment' },
    { text: '订单退款', value: 'refund' },
    { text: '订单发货', value: 'shipping' },
    { text: '订单退货', value: 'reship' },
    { text: '订单完成', value: 'completed' },
    { text: '订单作废', value: 'invlid' }
  ],
  // 三级导航
  menuAccount: {
    title: '账号管理',
    menu: [
      { text: '安全设置', value: 'account' },
      { text: '员工账号管理', value: 'employee_account' }
    ]
  },
  menuAnalysis: {
    title: '员工推广分析',
    menu: [
      { text: 'PC端', value: 'pc' },
      { text: '手机端', value: 'mobile' }
    ]
  },
  menuCost: {
    title: '费用中心',
    menu: [
      { text: '消费记录', value: 'cost_order' },
      { text: '已购产品', value: 'cost_purchased' }
    ]
  },
  menuPoint: {
    title: '积分管理',
    menu: [
      { text: '积分列表', value: 'point' },
      { text: '积分兑换', value: 'point_goods' },
      { text: '积分规则', value: 'point_origin' }
    ]
  },
  menuMessage: {
    title: '消息中心',
    menu: [
      { text: '全部消息', value: 'message' },
      { text: '未读消息', value: 'message/00', count: 0 },
      { text: '已读消息', value: 'message/01' },
      { text: '消息接收人设置', value: 'messageMan' }
    ]
  },
  menuStatic: {
    title: '站点管理',
    menu: [
      { text: '站点数据管理', value: 'static' },
      { text: 'SEO管理', value: 'seo' },
      { text: '域名备案', value: 'beian' },
      { text: '域名绑定', value: 'bind' },
      { text: 'Sitemap生成', value: 'sitemap' },
      { text: '批量提交', value: 'seo_batch' },
      { text: '第三方统计', value: 'third_party_statistics' },
      { text: '便捷登录配置', value: 'convenient' }
    ]
  },
  menuEnter: {
    title: '公司信息',
    menu: [
      { text: '基本资料', value: 'enterprise' },
      { text: '公司简介', value: 'company' },
      { text: '招聘管理', value: 'recruit' },
      { text: '友情链接', value: 'link' }
    ]
  },
  menu_product: {
    title: '产品管理',
    menu: [
      { text: '产品列表', value: 'product' },
      { text: '分类管理', value: 'category/product' },
      { text: '导入', value: 'product_import' },
      { text: '下载', value: 'product_download' }
    ]
  },
  menu_product_detail: {
    title: '返回',
    menu: [
      { text: '产品基本信息', value: '0' },
      { text: '电脑端产品内容', value: '1' },
      { text: '手机端产品内容', value: '2' },
      { text: '产品描述', value: '3' },
      { text: '产品卖点', value: '4' },
      { text: '商城属性', value: '5' },
      { text: '产品标签', value: '6' },
      { text: 'SEO设置', value: '7' }
    ]
  },
  menuEvaluate: {
    menu: [
      { text: '商品评价', value: '0' },
      { text: '所有商品评价', value: '1' }
    ]
  },
  menu_news: {
    title: '新闻管理',
    menu: [
      { text: '新闻列表', value: 'news' },
      { text: '分类管理', value: 'category/news' }
    ]
  },
  menu_news_detail: {
    menu: [
      { text: '新闻基本信息', value: '0' },
      { text: '新闻内容', value: '1' },
      { text: '新闻标签', value: '2' },
      { text: 'SEO设置', value: '3' }
    ]
  },
  menuMember: {
    title: '客户管理',
    menu: [
      { text: '会员管理', value: 'member' },
      { text: '会员等级配置', value: 'member_rank' },
      { text: '会员属性配置', value: 'member_attr' },
      { text: '网站会员注册', value: 'member_register' }
    ]
  },
  menu_member_detail: {
    menu: [
      { text: '会员基本信息', value: '0' },
      { text: '会员属性', value: '1' }
    ]
  },
  menuShop: {
    title: '商城管理',
    menu: [
      { text: '订单管理', value: 'shop' },
      { text: '商品相关配置', value: 'shop_config' },
      { text: '支持方式管理', value: 'shop_pay' },
      { text: '物流公司管理', value: 'shop_delivery' },
      { text: '物流单据设置', value: 'shop_bill' },
      { text: '商品退货管理', value: 'shop_refund' },
      { text: '营销管理', value: 'coupon' }
    ]
  },
  menu_shop_detail: {
    menu: [
      { text: '订单信息', value: '0' },
      { text: '商品信息', value: '1' },
      { text: '订单支付', value: '2' },
      { text: '订单发货', value: '3' },
      { text: '收款记录', value: '4' },
      { text: '收货记录', value: '5' },
      { text: '订单日志', value: '6' }
    ]
  },
  menu_shop_pay_detail: {
    menu: [
      { text: '基本信息', value: '0' },
      { text: '介绍', value: '1' }
    ]
  },
  menu_shop_bill_detail: {
    menu: [
      { text: '基本信息', value: '0' }
    ]
  },
  menu_coupon_detail: {
    menu: [
      { text: '基础信息', value: '0' },
      { text: '基础规则', value: '1' }
    ]
  }
}

const getters = {}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
