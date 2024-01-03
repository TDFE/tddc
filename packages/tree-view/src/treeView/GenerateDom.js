import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';

function chunkRender(dataArr, callback) {
  let delay = 100;
  let chunkSize = 50; // 设置切割大小

  const chunks = Array(Math.ceil(dataArr.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => dataArr.slice(begin, begin + chunkSize)); // 将原数组 B 切割成若干个小数组

  let currentIndex = 0;

  function renderChunk() {
    const start = performance.now();

    while (currentIndex < chunks.length && performance.now() - start < 16) {
      callback(chunks[currentIndex], currentIndex === chunks.length - 1); // 第二个参数为 true 时，表示已经处理完所有小数组
      currentIndex++;
    }

    if (currentIndex < chunks.length) {
      setTimeout(() => {
        requestAnimationFrame(renderChunk); // 如果还有未处理完的小数组，则继续请求下一帧
      }, delay);
    }
  }

  setTimeout(() => {
    requestAnimationFrame(renderChunk); // 先让浏览器渲染一次
  }, 0);
}

class HugeArray extends Component {
  constructor(props) {
    super(props);
    this.elements = [];
    this.container = createRef();
  }

  componentDidMount() {
    const { doms } = this.props;
    // 清除上一次渲染的 DOM 元素
    this.container.current.innerHTML = '';

    chunkRender(doms, this.handleChunk);
  }

  componentDidUpdate() {
    const { doms } = this.props;
    // 清除上一次渲染的 DOM 元素
    this.container.current.innerHTML = '';

    chunkRender(doms, this.handleChunk);
  }

  // 暴露给外部的方法和属性

  handleChunk = (chunk, bool) => {
    let dom = document.createElement('div');

    ReactDOM.render(chunk, dom, () => {
      this.container.current.appendChild(dom);
    });

    if (bool) {
      this.props.onFinish && this.props.onFinish();
    }
  };

  render() {
    return (
      <div
        ref={this.container}
        style={{
          display: 'absolute',
          minHeight: 100,
          width: this.props.width,
          height: this.props.height,
        }}
      />
    );
  }
}

export default HugeArray;
