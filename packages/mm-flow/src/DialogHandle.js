class DialogHandle {
  constructor(showType) {
    this.showType = showType;
  }

  async show(node, editor, handleShow) {
    const { data } = node;
    if (node?.data?.type === 'SubDecisionFlowNode') {
      editor.graph.node.unActive(node);
    }
    handleShow({
      nodeId: data.uuid,
      type: data.fromType || data.type,
    });
  }
}

export default DialogHandle;
