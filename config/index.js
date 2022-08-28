export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx62998c6c8d5a9e50",
    // 公众号appSecret
    appSecret: "4c83bb207164f6ce4616b5472882a39b",
    // 模板消息id
    templateId: "dx5x4iv5olH_l4RwTXZQtTE9-hlMZ18BTj-Q-8MBPwY	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [odkUj5zRxpcrF2l0-tMGYfpbJZoA],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "惠州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "乖乖", "year": "2002", "date": "11-22", "type": 'new'},
      {"name": "小扬", "year": "2002", "date": "06-11", "r": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-03-22",
  }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
