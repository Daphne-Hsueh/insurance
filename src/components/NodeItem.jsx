export const NodeItem = ({ node }) => {
  if (!node) {
    return null;
  }

  return (
    <div className="tree-node">
      <div className="node">
        {node.info.code} <br />
        {node.info.name}
      </div>
      <div className="children">
        {node.left && <NodeItem node={node.left} />}
        {node.right && <NodeItem node={node.right} />}
      </div>
    </div>
  );
};
