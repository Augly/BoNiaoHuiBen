// pages/demo/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    val: '/images/gold2.png', //头像
    name: '宝贝书屋', //名称
    j_number: 0,
    j_rate: '0.0%',
    c_number: 0,
    read_number: 0,
    read_rate: '0.0%',
    mouth_read: 0,
    mouth_number: 0,
    mouth_rate: '0.0%',
    book_fr: [
      {
        src: '/images/20190419114145.jpg',
        tel: 17633369350,
        age: 23
      },
      {
        src: '/images/20190419114145.jpg',
        tel: 17633369350,
        age: 23
      },
      {
        src: '/images/20190419114145.jpg',
        tel: 17633369350,
        age: 23
      }
    ],
    tab: [
      {
        val: 0,
        label: '热门'
      },
      {
        val: 1,
        label: '最新'
      },
      {
        val: 2,
        label: '关注'
      },
      {
        val: 3,
        label: '我的'
      }
    ],
    tab_index: 0,

    friendList: [
      {
        src: '/images/20190419114145.jpg',
        name: '仇益阳',
        age: '16',
        read_number: '10',
        time: '2019-4-11 21:52:04',
        content:
          '白天老人没给他做作业，晚上课后又剪了头发自己玩了会乐高，只剩一点点时间剪纸和看一本数学绘本了。不过比一比到时思路非常清楚',
        img_list: [
          '/images/20190419114145.jpg',
          '/images/20190419114145.jpg',
          '/images/20190419114145.jpg'
        ]
      }
    ],
    style: [
      { month: 'current', day: 3, color: "#6EB2F1", backgroundimg:"url('http://mywx.zzvlm.com/buqian.png')",checked:1 },
      { month: 'current', day: 4, color: "#6EB2F1", backgroundimg: "url('http://mywx.zzvlm.com/buqian.png')", checked: 1  },
      { month: 'current', day: 5, color: "#6EB2F1", backgroundimg: "url('http://mywx.zzvlm.com/buqian.png')", checked: 1 },
      { month: 'current', day: 6, color: "#6EB2F1", backgroundimg: "url('http://mywx.zzvlm.com/buqian.png')", checked: 1  },
      { month: 'current', day: 7, color: "#6EB2F1", backgroundimg: "url('http://mywx.zzvlm.com/buqian.png')", checked: 1  },
      { month: 'current', day: 8, color: "#6EB2F1", backgroundimg: "url('http://mywx.zzvlm.com/buqian.png')", checked: 1 },
      { month: 'current', day: 16, color: "rgba(0,0,0,0)", background: "ffffff", backgroundimg: "url('http://mywx.zzvlm.com/signed.png')", checked: 2 },
      { month: 'current', day: 13, color: "rgba(0,0,0,0)", background: "ffffff", backgroundimg: "url('http://mywx.zzvlm.com/signed.png')", checked: 2 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  changeshow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  select(e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      tab_index: e.currentTarget.dataset.index
    })
  },
  nextMonth(e) {
    console.log(e)
  },
  prevMonth(e) {
    console.log(e)
  },
  dateChange(e) {
    console.log(e)
  },
  dayClick(e) {
    console.log(e)
  },
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
