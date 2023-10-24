import { useEffect, useState } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { withRouter, matchPath, Link } from 'dva/router';
import { getText } from './locale';
import './index.less';
const searchToObject = (search) => {
  let pairs = search.substring(1).split('&');
  let obj = {};
  let pair;
  let i;
  for (i in pairs) {
    if (pairs[i] === '') {
      continue;
    }

    pair = pairs[i].split('=');
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return obj;
};

const getParams = (params) => {
  let paramStr = '';
  Object.keys(params).forEach((item) => {
    const tempParamStr = encodeURIComponent(params[item]);
    if (paramStr === '') {
      paramStr = `${item}=${tempParamStr}`;
    } else {
      paramStr = `${paramStr}&${item}=${tempParamStr}`;
    }
  });
  return paramStr;
};

const flatten = (arr) => {
  let res = [];
  const curArr = arr?.props?.children;
  for (let i = 0, length = curArr?.length; i < length; i++) {
    if (Array.isArray(curArr[i]?.props?.children)) {
      res = res.concat(flatten(curArr[i]));
    } else {
      res.push(curArr[i]?.props);
    }
  }
  return res;
};

export default (WrapperComponent, rest) => {
  const {
    defaultSearch = ['currentTab', 'current'],
    BreadCrumbCustom,
    BreadCrumbPrototype = {},
    showHeader,
    forceNoHeader,
    lang,
  } = rest || {};
  return withRouter((props) => {
    const { match, location, separator } = props || {};
    const { pathname, search } = location || {};
    const children = WrapperComponent({ ...props });
    const [breadList, setBreadList] = useState([]);
    // 记录链接上需要保留的query参数
    const searchObj = searchToObject(search);

    useEffect(() => {
      const routerArr = [];
      flatten(children)?.forEach((props) => {
        routerArr.push({
          path: props.path === '/' ? match?.path : props.path,
          name: props.name,
          query: props.query,
        });
      });

      const breadCrumbList = [];
      routerArr?.filter((routeObj) => {
        const { path } = routeObj || {};
        const pathObj = matchPath(pathname, { path });
        if (pathObj) {
          breadCrumbList.push({
            ...pathObj,
            ...(routeObj || {}),
          });
        }
      });

      breadCrumbList.sort((a, b) => {
        return a.path.length - b.path.length;
      });

      breadCrumbList?.map((item) => {
        const querySet = new Set();
        let curQuery = [];
        item.query?.map((item1) => {
          const curKey = Object.keys(item1)[0];
          const sourceKey = Object.values(item1)[0];
          curQuery.push(curKey + '=' + searchObj[sourceKey]);
          querySet.add(curKey);
        });

        // const matched = matchPath(pathname, { path: item.path, exact: true });
        if (defaultSearch?.length) {
          defaultSearch.forEach((defaultKey) => {
            if (!querySet.has(defaultKey)) {
              if (searchObj[defaultKey]) {
                curQuery.push(`${defaultKey}=${searchObj[defaultKey]}`);
              }
            }
          });
        }
        if (curQuery?.length) {
          item.url += '?' + curQuery.join('&');
        }
      });

      setBreadList(breadCrumbList);
    }, [pathname]);

    const onlyTwoLevels = breadList?.length === 2;

    return (
      <>
        {(breadList?.length > 1 || showHeader) && !forceNoHeader && (
          <div className="page-global-header bread-crumb-head">
            {BreadCrumbCustom &&
              !!breadList?.length &&
              BreadCrumbCustom(breadList, getParams(searchObj))}
            {!(BreadCrumbCustom && BreadCrumbCustom(breadList)) && (
              <Breadcrumb
                separator={!onlyTwoLevels ? separator || '>' : ' '}
                className="c-breadcrumb"
                {...(BreadCrumbPrototype || {})}
              >
                {breadList?.map((v, i) => {
                  const href = v?.url;
                  if (onlyTwoLevels && i === 0) {
                    const dom = (
                      <>
                        <Icon type="left" className="go-back" />
                        {getText('back', lang) || '返回'}
                      </>
                    );
                    return (
                      <Breadcrumb.Item key={v?.path}>
                        {href && i !== breadList?.length - 1 ? <Link to={href}>{dom}</Link> : dom}
                      </Breadcrumb.Item>
                    );
                  }
                  return (
                    <Breadcrumb.Item key={v?.path}>
                      {href && i !== breadList?.length - 1 ? (
                        <Link to={href}>{v?.name}</Link>
                      ) : (
                        v?.name
                      )}
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>
            )}
          </div>
        )}
        {children || null}
      </>
    );
  });
};
