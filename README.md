# React代码规范

## src目录结构
- src
 - `actions` 用于和redux通信的行为
 - `common` 公共文件
 - `components` 展示的react组件
 - `containers` 控制业务逻辑的react组件
 - `reducers` redux对象
 - `store` 存储redux的对象
 - `routers` react-router
 - `index.css` react根节点的样式文件
 - `index.js` react的入口文件

## 文件命名
如无特殊说明, 命名方式按原来的即可

### components
`components`的文件文件名首字母大写
### containers
`containers`的文件文件名首字母大写

## 变量命名
- 所有变量使用驼峰命名的形式: `fooBarBaz`
- react组件变量统一首字母大写: `ReactComponent`
- 类或者类工厂首字母大写: `Fundation`
- jQuery对象增加前缀`$`: `$this`

## 注释
公共方法必须增加注释, 并标明作者, 例如
```javascript
/**
 * @func 函数描述blablabla..
 *
 * @author sb233
 * @param  {aType} param1 param1描述
 * @param  {aType} param2 param2描述
 * @param  {aType} param3 param3描述
 * @return {aType}        返回值描述, 没有则不用
 */
function commonFunction(param1, param2, param3) {
    // doSomething...
}
```

## 书写React组件的注意事项
react采用单向数据流, 整个app的所有状态统一用redux管理, 因此所有组件(`container`或者`component`)需用到上级传递下来的`props`, 必须使用`PropTypes`声明变量的类型, 便于组件的复用
- 在`class`语法糖内, 如下:
```javascript
class MyComponent extends React.Component{
	static PropTypes = {
	    items: PropTypes.array.isRequired,
	    total: PropTypes.number.isRequired,
	    limit: PropTypes.number.isRequired,
	    page: PropTypes.number.isRequired,
	    isFetching: PropTypes.bool.isRequired,
	};
}
```
- 如果是通过`function`定义的组件, 如下:
```javascript
const MyComponent = ({items, total, limit, page, isFetching}) => {
	// 组件逻辑
};
MyComponent.PropTypes = {
   items: PropTypes.array.isRequired,
   total: PropTypes.number.isRequired,
   limit: PropTypes.number.isRequired,
   page: PropTypes.number.isRequired,
   isFetching: PropTypes.bool.isRequired,
};
```
关于`PropTypes`, [参见这里](https://themeteorchef.com/tutorials/what-are-proptypes)(好像需要翻墙访问)

### container
`container`用于处理业务逻辑, 是redux和components的桥接层, container内部的方法以`handle` + `Eventname`为前缀, 如:
```javascript
handlePageClick(page){
  this.props.dispatch(fetchCards(page))
}

handleRowClick(cardNumber, cardId){
    this.props.dispatch(showCustomers(cardNumber, cardId))
}

handleSearchClick(carNumber){
    this.props.dispatch(fetchSearchCard(carNumber))
}
```

### action
`action`是container和redux进行通信的方式, redux根据不同的action改变自己的状态

#### TYPE
aciton的类型, 变量和值均**大写**, 用`_`连接, 如:
```javascript
GETTING_CARDS: 'GETTING_CARDS',
GOT_CARDS: 'GOT_CARDS',
ERROR_GET_CARDS: 'ERROR_GETTING_CARDS'
```
特别是与服务器交互的action, 最好定义三种状态**进行时**, **成功**, **失败**

action类型变量建议根据`method`(get, post, put, delete)来定义, 失败类型则在变量前增加前缀`ERROR`

#### actionHandler
action的处理函数, 如果是与服务器交互的, 方法名前缀增加`fetch`, 如: `fetchGetUsers`

## 书写样式文件的注意事项
- 不要使用id选择器
- 非必要的情况, **禁止使用`!important`**标识符

### 关于css-module的样式
- 尽量使用一层`class`, 如`.my-class`(`css-loader`编译出来会自动给class增加文件名的前缀, 保证了`.my-class`的唯一性)
- 如果需要使用多层`class`, 如`.my-class .my-child-class`, 请在子`class`添加标识符`:global()`, 即写成`.my-class :global(.my-child-class)`, 防止css-loader把`.my-child-class`进行配置上的编译 [参考css-loader, 如有更好方案, 请分享](https://github.com/webpack-contrib/css-loader) 