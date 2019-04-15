//主域名
const https = 'http://yueke.dazhu-ltd.cn/user'
/**
 * 时间转换
 */
function timeForm(time) {
  var date = new Date(time * 1000),
    curDate = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours(),
    timeStr,
    btTimeStr

  if (minute < 10) {
    remW
    minute = '0' + minute
  }
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  btTimeStr = year + '-' + month + '-' + day
  if (year < curYear) {
    timeStr = year + '-' + month + '-' + day
  } else {
    var pastTime = curDate - date,
      pastH = pastTime / 3600000
    if (pastH > curHour) {
      timeStr = year + '-' + month + '-' + day
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute + '分'
    } else {
      var pastM = curDate.getMinutes() - minute
      if (pastM > 1) {
        timeStr = pastM + '分钟前'
      } else {
        timeStr = '刚刚'
      }
    }
  }
  return {
    chatTime: timeStr,
    btTime: btTimeStr
  }
}
/**
 * 封装自定义优美的toast
 */
function mytoast(main, successData) {
  wx.showToast({
    title: main,
    icon: 'none',
    mask: true,
    success: function(res) {
      if (successData) {
        setTimeout(res => {
          successData(res)
        }, 1500)
      }
    },
    fail: function(res) {},
    complete: function(res) {}
  })
}
/**
 * 选择图片
 */
function chooseImage(successData) {
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: res => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      // var tempFilePaths = res.tempFilePaths
      successData(res)
    }
  })
}
/**
 * 封装图片预览函数
 */
function viewImg(imgSrc) {
  wx.previewImage({
    current: imgSrc, // 当前显示图片的http链接
    urls: [imgSrc] // 需要预览的图片http链接列表
  })
}
/**
 * 封装本地存储
 */
function setStorage(key, value, successData) {
  wx.setStorage({
    key: key,
    data: value,
    success: function(res) {
      if (successData) {
        successData(res)
      }
    }
  })
}

function rem(height, successData) {
  wx.getSystemInfo({
    success: res => {
      if (height != null && height != undefined && height != '') {
        var myheight = res.windowHeight - (res.windowWidth / 750) * height
      } else {
        var myheight = res.windowHeight
      }
      successData(myheight)
    },
    fail: function(res) {},
    complete: function(res) {}
  })
}

function remW(height, successData) {
  wx.getSystemInfo({
    success: res => {
      if (height != null && height != undefined && height != '') {
        var myheight = (res.windowWidth / 750) * height
      } else {
        var myheight = res.windowHeight
      }
      successData(myheight)
    },
    fail: function(res) {},
    complete: function(res) {}
  })
}

function chooseLocation() {
  wx.openLocation({
    latitude: '',
    longitude: '',
    scale: '',
    name: '',
    address: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {}
  })
}
/**
 * 选择图片
 */
function chooseImage(successData) {
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: res => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      // var tempFilePaths = res.tempFilePaths
      successData(res)
    }
  })
}
/**
 * 封装获取uid
 */
function getuid(successData, errorData) {
  // 获取用户信息
  wx.login({
    success: res => {
      ajax(
        'POST',
        {
          code: res.code
        },
        token,
        res => {
          successData(res)
        },
        res => {
          if (errorData) {
            errorData(res)
          }
        }
      )
    },
    fail: function(res) {},
    complete: function(res) {}
  })
}
/**
 * 封装自定义优美的toast
 */
function mytoast(main, successData) {
  wx.showToast({
    title: main,
    icon: 'none',
    mask: true,
    success: function(res) {
      setTimeout(res => {
        if (successData) {
          successData(res)
        }
      }, 1500)
    },
    fail: function(res) {
      console.log(res)
    },
    complete: function(res) {}
  })
}
/**
 * 读取本地存储
 */
function getStorage(key, successData, faildata) {
  wx.getStorage({
    key: key,
    success: function(res) {
      if (successData(res)) {
        successData(res)
      }
    },
    fail: function(res) {
      if (faildata(res)) {
        faildata(res)
      }
    }
  })
}
/**
 * 获取自定义data变量
 */
function getData(e, name) {
  return e.currentTarget.dataset[name]
}
/**
 * 自定义request请求基类
 */
function ajax(Type, params, url, successData, errorData, completeData, imgurl) {
  var methonType = 'application/json'
  //访问的主域名
  var https = 'http://yueke.dazhu-ltd.cn/user'
  if (Type === 'PUT') {
    methonType = 'application/x-www-form-urlencoded'
  }
  if (Type == 'FORM') {
    methonType = 'application/form-data'
  }
  if (Type == 'POST') {
    methonType = 'application/x-www-form-urlencoded'
  }
  wx.showLoading({
    title: '数据加载中',
    mask: true,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {}
  })
  if (Type != 'img') {
    wx.request({
      url: https + url,
      method: Type,
      header: {
        'content-type': methonType
      },
      data: params,
      success: res => {
        wx.hideLoading()
        if (res.data.code == 1) {
          successData(res)
        } else if (res.data.code == -1) {
          //登陆超时
          mytoast('登陆超时')
          wx.clearStorage('user_token')
          wx.redirectTo({
            url: '/pages/login/login',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {}
          })
        } else {
          mytoast(res.data.msg)
        }
      },
      error(res) {
        if (errorData) {
          errorData(res)
        }
      },
      complete(res) {
        if (completeData) {
          completeData(res)
        }
      }
    })
  } else {
    if (imgurl) {
      wx.uploadFile({
        url: https + url,
        filePath: imgurl,
        name: 'image',
        formData: params,
        success: res => {
          wx.hideLoading()
          var data = JSON.parse(res.data)
          if (data.code == 1) {
            successData(data)
          } else {
            mytoast(data.msg)
          }
        },
        error(res) {
          if (errorData) {
            errorData(res)
          }
        },
        complete(res) {
          if (completeData) {
            completeData(res)
          }
        }
      })
    }
  }
}

//导出模块
module.exports = {
  https: https,
  ajax: ajax,
  rem: rem,
  remW: remW,
  chooseImage: chooseImage,
  getData: getData,
  mytoast: mytoast,
  timeForm: timeForm
}
