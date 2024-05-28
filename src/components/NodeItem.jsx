export const NodeItem = ({ node, setRootCode, rootCode }) => {
  if (!node) {
    return null;
  }

  let direct = "";
  if (node.info.introducer_code === rootCode) {
    direct = "direct";
  }
  return (
    <div className="tree-node">
      <div className="node" id={direct}>
        <div className="node-code" onClick={() => setRootCode(node.info.code)}>
          {node.info.code}
        </div>
        <div>{node.info.name}</div>
      </div>
      <div className="children">
        {node.left && (
          <NodeItem
            node={node.left}
            setRootCode={setRootCode}
            rootCode={rootCode}
          />
        )}
        {node.right && (
          <NodeItem
            node={node.right}
            setRootCode={setRootCode}
            rootCode={rootCode}
          />
        )}
      </div>
    </div>
  );
};
