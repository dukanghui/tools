define({ "api": [
  {
    "type": "get",
    "url": "/login",
    "title": "登录",
    "name": "PostLogin",
    "group": "Login",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "phone",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pwd",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据封装</p>"
          }
        ]
      }
    },
    "filename": "myapp/exp.js",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://192.168.1.222/yzplatform/mymvc?mvc_id=/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/con_user_seller_get_list",
    "title": "获取车商列表",
    "name": "GetCompany",
    "group": "User",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageIndex",
            "defaultValue": "1",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "username",
            "description": "<p>根据用户名查询用户</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "phone",
            "description": "<p>根据手机号查询用户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageTotal",
            "description": "<p>数据总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>分页数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.data",
            "description": "<p>分页数据对象数组</p>"
          }
        ]
      }
    },
    "filename": "myapp/exp.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://192.168.1.222/yzplatform/mymvc?mvc_id=/con_user_seller_get_list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/con_user_get_condition",
    "title": "获取个人用户列表",
    "name": "PostCompany",
    "group": "User",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageIndex",
            "defaultValue": "1",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "username",
            "description": "<p>根据用户名查询用户</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "phone",
            "description": "<p>根据手机号查询用户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageTotal",
            "description": "<p>数据总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>分页数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.data",
            "description": "<p>分页数据对象数组</p>"
          }
        ]
      }
    },
    "filename": "myapp/exp.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://192.168.1.222/yzplatform/mymvc?mvc_id=/con_user_get_condition"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test",
    "title": "测试接口",
    "name": "___",
    "group": "zTest",
    "version": "0.1.0",
    "description": "<p>接口详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageIndex",
            "defaultValue": "1",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "phone",
            "description": "<p>根据手机号查询用户</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>分页数据封装</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.count",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.list",
            "description": "<p>分页数据对象数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  code:0,\n  msg:'success',\n  data:{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "All",
            "description": "<p>对应<code>id</code>的用户没找到 asdfasdf</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code:1,\n  msg:'user not found',\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/exp.js",
    "groupTitle": "zTest",
    "sampleRequest": [
      {
        "url": "http://192.168.1.222/yzplatform/mymvc?mvc_id=/test"
      }
    ]
  }
] });
