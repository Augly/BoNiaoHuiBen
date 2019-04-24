// pages/seach/seach.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tab_index: 0,
    label:'',
    tab_list: [{
      label: '综合',
      value: 0,
    }, {
      label: '销量',
      value: 1,
    }, {
      label: '最新',
      value: 2,
    }],
    multiIndex:[0,0],
    multiArray: [
      ['绘本', '玩具'],
      ['书名', '系列', '综合', '作者', '出版社','ISBN编码'],
    ],

    //热门推荐
    hot_list: [{
      src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      },
      {
        src: '/images/book1.jpg',
        title: '吴敏兰',
        tab: ['0-3岁', '科普百科']
      }
    ]
  },
  bindMultiPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      label: this.data.multiArray[1][this.data.multiIndex[1]]
    })
  },
  bindMultiPickerColumnChange(e) {
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (e.detail.value) {
          case 0:
            data.multiArray[1] = ['书名', '系列', '综合', '作者', '出版社','ISBN编码']
            break
          case 1:
            data.multiArray[1] = ['名称', '品牌', '生产商']
            break
        }
        data.multiIndex[1] = 0
        break
    }
    this.setData(data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },
  //切换选项
  select_tab(e) {
    this.setData({
      tab_index: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      label:this.data.multiArray[1][this.data.multiIndex[1]]
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})