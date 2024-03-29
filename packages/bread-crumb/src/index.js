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

export function flatten(arr) {
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
}

export default (WrapperComponent, rest) => {
  const {
    includesSearch = ['currentTab'],
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
    const newSearchObj = searchToObject(search);
    const newObj = {};
    for (let i in newSearchObj) {
      newObj[i] = newSearchObj[i];
    }

    useEffect(() => {
      const routerArr = [];
      flatten(children)?.forEach((props) => {
        routerArr.push({
          path: props.path === '/' ? match?.path : props.path,
          name: props.name,
          query: props.query,
        });
      });
      const breadCrumbList = routerArr?.filter(({ path }) => {
        return matchPath(pathname, { path });
      });
      breadCrumbList.sort((a, b) => {
        return a.path.length - b.path.length;
      });
      breadCrumbList?.map((item) => {
        if (item?.query) {
          item.path += '?';
          item.query?.map((item1, index1) => {
            item.path += Object.keys(item1)[0] + '=' + newObj[Object.values(item1)[0]];
            if (index1 !== item.query.length - 1) {
              item.path += '&';
            }
          });
        }

        if (item.path === pathname) {
          item.path = pathname + search;
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
              BreadCrumbCustom(breadList, getParams(newObj))}
            {!(BreadCrumbCustom && BreadCrumbCustom(breadList)) && (
              <Breadcrumb
                separator={!onlyTwoLevels ? separator || '>' : ' '}
                className="c-breadcrumb"
                {...(BreadCrumbPrototype || {})}
              >
                {breadList?.map((v, i) => {
                  const { query } = v;

                  if (query && Array.isArray(query)) {
                    query.forEach((q) => {
                      for (let qKey in q) {
                        const getVKey = q[qKey];
                        if (newSearchObj[getVKey]) {
                          newObj[qKey] = newSearchObj[getVKey];
                        }
                      }
                    });
                  }

                  let href = null;
                  if (i < breadList?.length - 1) {
                    href = v?.path + (getParams(newObj) ? `?${getParams(newObj)}` : '');
                  }

                  if (onlyTwoLevels && i === 0) {
                    const dom = (
                      <>
                        <Icon type="left" className="go-back" />
                        {getText('back', lang) || '返回'}
                      </>
                    );
                    return (
                      <Breadcrumb.Item key={v?.path}>
                        {href ? <Link to={href}>{dom}</Link> : dom}
                      </Breadcrumb.Item>
                    );
                  }
                  return (
                    <Breadcrumb.Item key={v?.path}>
                      {href ? <Link to={href}>{v?.name}</Link> : v?.name}
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
