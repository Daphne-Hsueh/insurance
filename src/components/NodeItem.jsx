export const NodeItem = ({ node, setRootCode }) => {
  if (!node) {
    return null;
  }

  return (
    <div className="tree-node">
      <div className="node">
        <div className="node-code" onClick={() => setRootCode(node.info.code)}>
          {node.info.code}
        </div>
        <div> {node.info.name}</div>
      </div>
      <div className="children">
        {node.left && <NodeItem node={node.left} />}
        {node.right && <NodeItem node={node.right} />}
      </div>
    </div>
  );
};
