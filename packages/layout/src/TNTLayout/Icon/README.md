## Icon组件
### 代码演示
```jsx
import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Icon } from 'tntd';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  .site-body {
    .ichYgh {
        padding: 0;
        overflow: visible;
    }
}
`;

ReactDOM.render(
    <Icon type="analysis" />,
    document.getElementById('root')
);
```

```jsx
import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Input } from 'antd';
import { Icon } from 'tntd';
import icons from 'tntd/Icon/iconList';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  .site-body {
    .ichYgh {
        padding: 0;
        overflow: visible;
    }
}
`;

const IconList = styled.ul`
    margin: 10px 0;
    overflow: hidden;
    list-style: none;
`;
const IconItem = styled.li`
    position: relative;
    float: left;
    width: 16.66%;
    height: 100px;
    margin: 3px 0;
    padding: 10px 0 0;
    overflow: hidden;
    color: #555;
    text-align: center;
    list-style: none;
    background-color: inherit;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    &:hover {
        color: #fff;
        background-color: #1890ff;
    }
    .tnt-icon {
        margin: 12px 0 8px;
        font-size: 36px;
        -webkit-transition: -webkit-transform 0.3s ease-in-out;
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        will-change: transform;
    }
`;

const IconsDemo = props => {
    const [searchValue, setSearchValue] = useState();

    return (
        <Fragment>
            <Input.Search
                onChange={evt => setSearchValue(evt.target.value)}
                placeholder="输入icon标识搜索"
            />
            <IconList>
                {
                    icons.filter(
                        icon => (!searchValue || new RegExp(searchValue, 'i').test(icon))
                    ).map(icon => (
                        <IconItem key={icon}>
                            <Icon type={icon} />
                            <p>{icon}</p>
                        </IconItem>
                    ))
                }
            </IconList>
            <GlobalStyle />
        </Fragment>
    );
};


ReactDOM.render(
    <IconsDemo />,
    document.getElementById('root')
);
```


### API
#### Icon

| 属性名称    | 属性说明                           | 类型     | 默认值      | 是否必须 |
| :---------- | :------------------------------ | :------ | :---------- | :------- |
| type        | icon类型标识                     | string   | 无          | 是       |
| prefix      | type 前缀                       | string   |         | 否       | 
