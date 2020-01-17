/** 权限管理配置 */
const authorize = [
  {
    key: 'AUTHORIZE:R',
    pKey: '',
    name: '权限管理'
  },
  // -- 部门权限管理 ---------------------------------------------------------
  {
    key: 'AUTHORIZE:DEPT:R',
    pKey: 'AUTHORIZE:R',
    name: '部门权限管理'
  },
  // 部门权限管理-接口权限
  {
    key: 'AUTHORIZE:DEPT:LIST:A',
    pKey: 'AUTHORIZE:DEPT:R',
    name: '部门权限管理列表'
  },
  {
    key: 'AUTHORIZE:DEPT:TREE:A',
    pKey: 'AUTHORIZE:DEPT:R',
    name: '全部部门'
  },
  {
    key: 'AUTHORIZE:DEPT:ADD:A',
    pKey: 'AUTHORIZE:DEPT:R',
    name: '授权部门'
  },
  {
    key: 'AUTHORIZE:DEPT:DEL:A',
    pKey: 'AUTHORIZE:DEPT:R',
    name: '移除授权部门'
  },
  // -- 员工权限管理 ---------------------------------------------------------
  {
    key: 'AUTHORIZE:EMPLOYEE:R',
    pKey: 'AUTHORIZE:R',
    name: '员工权限管理'
  },
  // 员工权限管理-接口权限
  {
    key: 'AUTHORIZE:EMPLOYEE:LIST:A',
    pKey: 'AUTHORIZE:EMPLOYEE:R',
    name: '员工权限管理列表'
  },

  {
    key: 'AUTHORIZE:EMPLOYEE:TREE:A',
    pKey: 'AUTHORIZE:EMPLOYEE:R',
    name: '全部员工'
  },
  {
    key: 'AUTHORIZE:EMPLOYEE:ADD:A',
    pKey: 'AUTHORIZE:EMPLOYEE:R',
    name: '授权员工'
  },
  {
    key: 'AUTHORIZE:EMPLOYEE:DEL:A',
    pKey: 'AUTHORIZE:EMPLOYEE:R',
    name: '移除授权员工'
  },

  // -- 权限管理权限配置 ---------------------------------------------------------
  {
    key: 'AUTHORIZE:ROLE:R',
    pKey: 'AUTHORIZE:R',
    name: '角色管理'
  },

  {
    key: 'AUTHORIZE:ROLE:LIST:A',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '角色列表'
  },
  {
    key: 'AUTHORIZE:ROLE:LIST:TYPE:D',
    pKey: 'AUTHORIZE:ROLE:LIST:A',
    name: '角色类型'
  },
  {
    key: 'AUTHORIZE:ROLE:ADD:A',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '添加角色'
  },
  {
    key: 'AUTHORIZE:ROLE:EDIT:A',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '修改角色'
  },
  {
    key: 'AUTHORIZE:ROLE:DEL:A',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '删除角色'
  },

  // 管理员工
  {
    key: 'AUTHORIZE:ROLE:EMPLOYEE:R',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '管理员工'
  },
  {
    key: 'AUTHORIZE:ROLE:EMPLOYEE:LIST:A',
    pKey: 'AUTHORIZE:ROLE:EMPLOYEE:R',
    name: '角色员工列表'
  },
  {
    key: 'AUTHORIZE:ROLE:EMPLOYEE:ADD:A',
    pKey: 'AUTHORIZE:ROLE:EMPLOYEE:R',
    name: '添加员工'
  },
  {
    key: 'AUTHORIZE:ROLE:EMPLOYEE:DEL:A',
    pKey: 'AUTHORIZE:ROLE:EMPLOYEE:R',
    name: '删除员工'
  },

  // 管理部门
  {
    key: 'AUTHORIZE:ROLE:DEPT:R',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '管理部门'
  },
  {
    key: 'AUTHORIZE:ROLE:DEPT:LIST:A',
    pKey: 'AUTHORIZE:ROLE:DEPT:R',
    name: '角色部门'
  },
  {
    key: 'AUTHORIZE:ROLE:DEPT:ADD:A',
    pKey: 'AUTHORIZE:ROLE:DEPT:R',
    name: '添加部门'
  },
  {
    key: 'AUTHORIZE:ROLE:DEPT:DEL:A',
    pKey: 'AUTHORIZE:ROLE:DEPT:R',
    name: '删除部门'
  },
  // 分配权限
  {
    key: 'AUTHORIZE:ROLE:ASSIGN:R',
    pKey: 'AUTHORIZE:ROLE:R',
    name: '分配权限'
  },
  {
    key: 'AUTHORIZE:ROLE:ASSIGN:LIST:A',
    pKey: 'AUTHORIZE:ROLE:ASSIGN:R',
    name: '角色已绑定权限'
  },
  {
    key: 'AUTHORIZE:ROLE:ASSIGN:ADD:A',
    pKey: 'AUTHORIZE:ROLE:ASSIGN:R',
    name: '绑定权限'
  },
  // -- 白名单管理 -------------------------------------------------------
  {
    key: 'AUTHORIZE:ROLE:WHITE:R',
    pKey: 'AUTHORIZE:ROLE:R',
    path: '/authorize/white-list',
    name: '白名单管理'
  },
  {
    key: 'AUTHORIZE:ROLE:WHITE:LIST:A',
    pKey: 'AUTHORIZE:ROLE:WHITE:R',
    name: '白名单列表'
  },
  {
    key: 'AUTHORIZE:ROLE:WHITE:ADD:A',
    pKey: 'AUTHORIZE:ROLE:WHITE:R',
    name: '新加白名单'
  },
  {
    key: 'AUTHORIZE:ROLE:WHITE:DEL:A',
    pKey: 'AUTHORIZE:ROLE:WHITE:R',
    name: '删除白名单'
  }
];
export default authorize;
