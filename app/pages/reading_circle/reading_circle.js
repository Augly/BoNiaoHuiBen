// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    style: [
      // { month: 'current', day: 3, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 12, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 13, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 14, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 15, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 16, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 26, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 27, color: '#6EB2F1', background: '#EBF5FF' },
      // { month: 'current', day: 28, color: '#6EB2F1', background: '#EBF5FF' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeshow(){
    this.setData({
      isShow: !this.data.isShow
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})