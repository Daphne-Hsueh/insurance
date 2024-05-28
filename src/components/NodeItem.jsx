export const NodeItem = ({ node, setRootNodeCode, rootNodeCode }) => {
  if (!node) {
    return null;
  }

  const isDirectNode = (node, rootNodeCode) => {
    return node.info.introducer_code === rootNodeCode ? "direct" : "";
  };
  let direct = isDirectNode(node, rootNodeCode);

  return (
    <div className="tree-node">
      <div className="node" id={direct}>
        <div
          role="button"
          className="node-code"
          onClick={() => setRootNodeCode(node.info.code)}
        >
          {node.info.code}
        </div>
        <div>{node.info.name}</div>
      </div>
      <div className="children">
        {node.left && (
          <NodeItem
            node={node.left}
            setRootNodeCode={setRootNodeCode}
            rootNodeCode={rootNodeCode}
          />
        )}
        {node.right && (
          <NodeItem
            node={node.right}
            setRootNodeCode={setRootNodeCode}
            rootNodeCode={rootNodeCode}
          />
        )}
      </div>
    </div>
  );
};
