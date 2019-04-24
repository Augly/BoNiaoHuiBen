Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    indicatorColor: 'RGBA(0, 0, 0, 0.3)',
    indicatorActiveColor: 'RGBA(110, 209, 78, 1)',
    autoplay: true,
    interval: 2000,
    duration: 500,
    //宫格导航
    tabList: [
      {
        src: '/images/tab9.png',
        title: '智能选书'
      },
      {
        src: '/images/tab4.png',
        title: '系列'
      },
      {
        src: '/images/tab2.png',
        title: '绘本回收'
      },
      {
        src: '/images/tab3.png',
        title: '加入会员'
      },
      {
        src: '/images/tab1.png',
        title: '儿童玩具'
      },
      {
        src: '/images/tab7.png',
        title: '新书上架'
      },
      {
        src: '/images/tab6.png',
        title: '小盒子'
      },
      {
        src: '/images/tab8.png',
        title: '英文原版'
      }
    ],
    //点读专区
    readlist: [
      {
        src: '/images/pencli.jpg',
        title: '毛毛虫'
      },
      {
        src: '/images/pencli2.jpg',
        title: '小达人'
      }
    ],

    //特色人物专区
    characters: [
      {
        src: '/images/b1.jpg',
        title: '小猪佩奇'
      },
      {
        src: '/images/b2.jpg',
        title: '小鼠波波'
      },
      {
        src: '/images/b3.jpg',
        title: '小玻'
      }
    ],
    //名家大师
    special_characters: [
      {
        src: '/images/p1.jpg',
        title: '艾瑞·卡尔'
      },
      {
        src: '/images/p2.jpg',
        title: '安东尼·布朗'
      },
      {
        src: '/images/p3.jpg',
        title: '李欧·李奥尼'
      }
    ],
    //名品馆
    famous_list: [
      {
        src: '/images/a1.jpg',
        title: '读小库'
      },
      {
        src: '/images/a2.jpg',
        title: '蒲蒲兰'
      },
      {
        src: '/images/a3.jpg',
        title: '李欧·李奥尼'
      }
    ],
    //名人书单
    famous_book: [
      {
        src: '/images/20190419114145.jpg',
        title: '吴敏兰'
      },
      {
        src: '/images/20190419114145.jpg',
        title: '吴敏兰'
      }
    ],
    //大奖专区
    gold_list: [
      {
        src: '/images/gold2.png',
        title: '凯迪克金奖'
      },
      {
        src: '/images/gold3.png',
        title: '凯迪克银奖'
      },
      {
        src: '/images/gold.png',
        title: '德国绘本奖'
      },
      {
        src: '/images/gold1.png',
        title: '格林纳威奖'
      }
    ],
    //热门推荐
    hot_list: [
      {
        src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      },
      {
        src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      },
      {
        src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      },
      {
        src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      }
    ],
    //年龄专区
    age_list: [
      {
        bg_color: 'RGBA(157, 211, 160, 0.6)',
        title: '0-3岁'
      },
      {
        bg_color: 'RGBA(229, 177, 112, 0.6)',
        title: '3-6岁'
      },
      {
        bg_color: 'RGBA(223, 149, 112, 0.6)',
        title: '7-10岁'
      },
      {
        bg_color: 'RGBA(115, 165, 213, 0.6)',
        title: '10岁以上'
      }
    ]
  },
  to_help(){
    wx.navigateTo({
      url: '/pages/interactive_list/interactive_list',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  to_detail(){
    wx.navigateTo({
      url: '/pages/details/details',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  to_al(){
    wx.navigateTo({
      url: '/pages/AI_hot_list/AI_hot_list',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //去搜索
  to_seach(){
    wx.navigateTo({
      url: '/pages/seach/seach?title=搜索',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  go_tab(e){
    console.log(e)
    if (e.currentTarget.dataset.index==0){
      wx.navigateTo({
        url: '/pages/books_select/books_select',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (e.currentTarget.dataset.index == 3){
      wx.navigateTo({
        url: '/pages/membership_plan/membership_plan',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (e.currentTarget.dataset.index == 1) {
      wx.navigateTo({
        url: '/pages/seach/seach?title=系列',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (e.currentTarget.dataset.index == 4) {
      wx.navigateTo({
        url: '/pages/seach/seach?title=儿童玩具',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (e.currentTarget.dataset.index == 5) {
      wx.navigateTo({
        url: '/pages/seach/seach?title=新书上架',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (e.currentTarget.dataset.index == 7) {
      wx.navigateTo({
        url: '/pages/seach/seach?title=英文原版',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
