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
 * @apiSuccess {String} status 状态码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 返回数据封装
 *
 */

/**
 * @api {get} /con_user_get_condition 获取个人用户列表
 * @apiName PostCompany
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize=10 分页大小
 * @apiParam {int} pageIndex=1 第几页
 * @apiParam {int} [username] 根据用户名查询用户
 * @apiParam {int} [phone] 根据手机号查询用户
 *
 * @apiSuccess {String} pageTotal 数据总条数
 * @apiSuccess {String} pageIndex 当前页数
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.data 分页数据对象数组
 *
 */

/**
 * @api {get} /con_user_seller_get_list 获取车商列表
 * @apiName GetCompany
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize=10 分页大小
 * @apiParam {int} pageIndex=1 第几页
 * @apiParam {int} [username] 根据用户名查询用户
 * @apiParam {int} [phone] 根据手机号查询用户
 *
 * @apiSuccess {String} pageTotal 数据总条数
 * @apiSuccess {String} pageIndex 当前页数
 * @apiSuccess {Object} data 分页数据封装
 * @apiSuccess {int} data.data 分页数据对象数组
 *
 */

/**
 * @api {get} /test 测试接口
 * @apiName 测试用
 * @apiGroup zTest
 * @apiVersion 0.1.0
 * @apiDescription 接口详细描述
 *
 * @apiParam {int} pageSize=10 分页大小
 * @apiParam {int} pageIndex=1 第几页
 * @apiParam {int} [phone] 根据手机号查询用户
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