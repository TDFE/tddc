export default (props) => {
  const { children, href, unmountHandle, ...rest } = props;
  if (window.__isMultiTab__ || true) {
    return (
      <a
        onClick={(evt) => {
          evt.preventDefault();
          if (unmountHandle && typeof unmountHandle === 'function') {
            unmountHandle();
          }
          let pathName = href;
          if (href && href.includes('?')) {
            pathName = href?.split('?')[0];
          }
          if (pathName === window.location.pathname) {
            window.location.href = href;
          } else {
            window.push(href);
          }
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
