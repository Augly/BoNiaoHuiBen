// pages/books_select/books_select.js
const config=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age_list: [{
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
    }],
    class_list: [{
      label: '课外阅读',
      checked: false
    }, {
      label: '人文历史',
      checked: false
    }, {
      label: '桌游拼图',
      checked: false
    }, {
      label: '童谣儿歌',
      checked: false
      }, {
        label: '中外经典',
        checked: false
      }],
    lange_list: [{
      label: '中文',
      checked: false
    }, {
      label: '中文注音',
      checked: false
    }, {
      label: '英文',
      checked: false
    }, {
      label: '英文注音',
      checked: false
    }],
    number_list: [{
      label: '4本',
      checked: false
    }, {
      label: '6本',
      checked: false
    }, {
      label: '8本',
      checked: false
    }, {
      label: '10本',
      checked: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  age_select(e){
    let _arr=this.data.age_list
    _arr.forEach((item) => {
        item.checked=false
    });
    _arr[e.currentTarget.dataset.index].checked=true
    this.setData({
      age_list: _arr
    })
  },
  class_select(e) {
    let _arr = this.data.class_list
    let s_n=0
    _arr.forEach((item) => {
     if (item.checked){
       s_n++
     }
    });
    if(s_n==3){
      config.mytoast('最多只能选择三类') 
    }else{
      _arr[e.currentTarget.dataset.index].checked = !_arr[e.currentTarget.dataset.index].checked
    }
    
    this.setData({
      class_list: _arr
    })
  },
lange_select(e) {
    let _arr = this.data.lange_list
    _arr.forEach((item) => {
      item.checked = false
    });
    _arr[e.currentTarget.dataset.index].checked = true
    this.setData({
      lange_list: _arr
    })
  },
  number_select(e) {
    let _arr = this.data.number_list
    _arr.forEach((item) => {
      item.checked = false
    });
    _arr[e.currentTarget.dataset.index].checked = true
    this.setData({
      number_list: _arr
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