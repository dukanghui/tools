# apiDoc

apidoc -i myapp -o doc
{
  "name": "接口文档",
  "version": "0.1.0",
  "description": "一众汽车后台管理接口文档",
  "title": "User API",
  "url" : "http://192.168.1.222/yzplatform/mymvc?mvc_id=",
  "sampleUrl": "http://192.168.1.222/yzplatform/mymvc?mvc_id=",
  "header": {
    "title": "Overview"
  },
  "footer": {
    "title": "Copyright"
  },
  "template": {
    "withCompare": false,
    "withGenerator": false
  }
}


jdbc:sqlserver://serverName[\instanceName][:portNumber];property=value;property=value



/**
 * @api {get} /login 登录
 * @apiName PostLogin
 * @apiGroup Login
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} phone用户名
 * @apiParam {int} pwd用户密码
 *
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} msg 消息说明
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.count 总记录数
 * @apiSuccess {Object[]} data.list 分页数据对象数组
 *
 */

/**
 * @api {get} /con_user_get_condition 获取个人用户列表
 * @apiName PostCompany
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize分页大小
 * @apiParam {int} pageIndex第几页
 * @apiParam {int} username根据用户名查询用户 非必传
 * @apiParam {int} phone根据手机号查询用户 非必传
 *
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} msg 消息说明
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.count 总记录数
 * @apiSuccess {Object[]} data.list 分页数据对象数组
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   code:0,
 *   msg:'success',
 *   data:{}
 * }
 *
 *  @apiError All 对应<code>id</code>的用户没找到 asdfasdf
 *  @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *    code:1,
 *    msg:'user not found',
 *  }
 *
 */

/**
 * @api {get} /con_user_seller_get_list 获取车商列表
 * @apiName GetCompany
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize分页大小
 * @apiParam {int} pageIndex第几页
 * @apiParam {int} username根据用户名查询用户 非必传
 * @apiParam {int} phone根据手机号查询用户 非必传
 *
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} msg 消息说明
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.count 总记录数
 * @apiSuccess {Object[]} data.list 分页数据对象数组
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   code:0,
 *   msg:'success',
 *   data:{}
 * }
 *
 *  @apiError All 对应<code>id</code>的用户没找到 asdfasdf
 *  @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *    code:1,
 *    msg:'user not found',
 *  }
 *
 */

/**
 * @api {get} /con_user_seller_get_list 测试接口
 * @apiName 测试用
 * @apiGroup zTest
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize分页大小
 * @apiParam {int} pageIndex第几页
 *
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} msg 消息说明
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.count 总记录数
 * @apiSuccess {Object[]} data.list 分页数据对象数组
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   code:0,
 *   msg:'success',
 *   data:{}
 * }
 *
 *  @apiError All 对应<code>id</code>的用户没找到 asdfasdf
 *  @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *    code:1,
 *    msg:'user not found',
 *  }
 *
 */
