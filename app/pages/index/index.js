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
    tabList: [
      {
        banner_color: 'RGBA(145, 189, 229, 1)',
        title: '智能选书'
      },
      {
        banner_color: 'RGBA(170, 224, 247, 1)',
        title: '系列'
      },
      {
        banner_color: 'RGBA(159, 218, 138, 1)',
        title: '绘本回收'
      },
      {
        banner_color: 'RGBA(250, 205, 137, 1)',
        title: '加入会员'
      },
      {
        banner_color: 'RGBA(221, 181, 217, 1)',
        title: '儿童玩具'
      },
      {
        banner_color: 'RGBA(169, 212, 203, 1)',
        title: '新书上架'
      },
      {
        banner_color: 'RGBA(242, 156, 159, 1)',
        title: '小盒子'
      },
      {
        banner_color: 'RGBA(199, 194, 226, 1)',
        title: '英文原版'
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
