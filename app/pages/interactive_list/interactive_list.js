// pages/interactive_list/interactive_list.js
const config = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    height: 0,
    wrap_height: 0,
    navtab_list_index: 0,
    navtab_list: [{
      label: '最新',
      list: [{
        label: '最新',
        checked: true
      }, {
        label: '最热',
        checked: false
      }, {
        label: '借阅',
        checked: false
      }, {
        label: '评分',
        checked: false
      }]
    }, {
      label: '年龄',
      list: [{
        label: '年龄',
        checked: true
      }, {
        label: '0-2岁',
        checked: false
      }, {
        label: '3-6岁',
        checked: false
      }, {
        label: '7-10岁',
        checked: false
      }, {
        label: '10岁以上',
        checked: false
      }]
    }, {
      label: '分类',
      list: [{
        label: '分类',
        checked: true
      }, {
        label: '英文启蒙',
        checked: false
      }, {
        label: '兴趣阅读',
        checked: false
      }, {
        label: '认识身体',
        checked: false
      }, {
        label: '必读',
        checked: false
      }]
    }, ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    config.rem(0, (res) => {
      this.setData({
        height: res
      })
    })
    config.rem(176, (res) => {
      this.setData({
        wrap_height: res
      })
    })
  },
  handel_tab(e) {
    this.setData({
      tab_index: e.currentTarget.dataset.index
    })
  },
  to_detail() {
    wx.navigateTo({
      url: '/pages/details/details',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_creat(){
    wx.navigateTo({
      url: '/pages/create_book_list/create_book_list',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  hide_mask() {
    this.setData({
      mask: false
    })
  },
  wrap_select(e) {
    let list = this.data.navtab_list
    let s = list[this.data.navtab_list_index]
    s.list.forEach(item => {
      item.checked = false
    });
    s.list[e.currentTarget.dataset.index].checked = !s.list[e.currentTarget.dataset.index].checked
    s.label = s.list[e.currentTarget.dataset.index].label
    this.setData({
      navtab_list: list
    })
  },
  select(e) {
    this.setData({
      navtab_list_index: e.currentTarget.dataset.index,
      mask: true
    })
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