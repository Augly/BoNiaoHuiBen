// pages/bookshelf/bookshelf.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    all:false,
    list: [
      {
        src: '/images/20190419114145.jpg',
        title: '测试',
        checked:false
      }
    ]
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  select(e) {
    let _arr = this.data.list
    _arr[e.currentTarget.dataset.index].checked = !_arr[e.currentTarget.dataset.index].checked
    let s_n = 0
    for(let s=0;s<_arr.length;s++){
      if (_arr[s].checked) {
        s_n++
      }
    }
    if (s_n == this.data.list.length) {
      this.setData({
        all:true
      })
    } else if (s_n ==0) {
      this.setData({
        all: false
      })
    }
    this.setData({
      list: _arr
    })
  },
  all_select(){
    let _a=this.data.all
    let _arr = this.data.list
    _a=!_a
    _arr.forEach((item) => {
      item.checked=_a
    });
    this.setData({
      all:_a,
      list: _arr
    })
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
