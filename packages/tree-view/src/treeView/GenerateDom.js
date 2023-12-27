import React, { Component } from 'react';
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
    this.container = props.container || <div />;
    this.elements = [];
  }

  componentDidMount() {
    const { doms } = this.props;
    chunkRender(doms, this.handleChunk); // 初始化分块渲染功能
  }

  handleChunk = (chunk, bool) => {
    const elements = chunk; // 根据当前小数组生成 DOM 元素

    this.elements = this.elements.concat(elements); // 将元素添加到元素数组中
    ReactDOM.render(this.elements, this.container); // 渲染所有元素

    if (bool) {
      this.props.onFinish && this.props.onFinish();
    }
  };

  render() {
    return <></>;
  }
}

export default HugeArray;
