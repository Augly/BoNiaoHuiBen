// compand/start.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onlyRead:{
      type:Boolean,
      value:false
    },
    score:{
      type:Number,
      value:3
    },
    fontSize:{
      type:String,
      value:'20rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    start: [1, 2, 3, 4, 5],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabStart(e) {
      if (this.data.onlyRead){
        
      }else{
        this.setData({
          score: e.currentTarget.dataset.index
        })
      }
      
    },
  }
})
