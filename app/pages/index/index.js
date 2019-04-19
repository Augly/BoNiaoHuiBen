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
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      }
    ],

    //特色人物专区
    characters: [
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      }
    ],
    //名家大师
    special_characters: [
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      }
    ],
    //名品馆
    famous_list: [
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      },
      {
        src: '/images/gold2.png',
        title: '毛毛虫'
      }
    ],
    //名人书单
    famous_book: [
      {
        src: '/images/gold2.png',
        title: '吴敏兰'
      },
      {
        src: '/images/gold2.png',
        title: '吴敏兰'
      }
    ],
    //大奖专区
    gold_list: [
      {
        src: '/images/gold2.png',
        title: '吴敏兰'
      },
      {
        src: '/images/gold2.png',
        title: '吴敏兰'
      }
    ],
    //热门推荐
    hot_list: [
      {
        src: '/images/gold2.png',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      },
      {
        src: '/images/gold2.png',
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
