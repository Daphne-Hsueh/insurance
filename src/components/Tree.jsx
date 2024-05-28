import React, { useEffect, useState } from "react";
import { NodeItem } from "./NodeItem";

function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;

  let root = { info: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let current = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      current.left = { info: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = { info: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

export const Tree = ({ searchValue, setSearchValue }) => {
  const [rootCode, setRootCode] = useState("0000000001");
  const [currentNode, setCurrentNode] = useState(null);

  const fetchPolicyholder = async (code) => {
    const response = await fetch(`/api/policyholders?code=${code}`);
    const data = await response.json();
    setCurrentNode(data.code);
  };

  useEffect(() => {
    if (searchValue && searchValue !== rootCode) {
      console.log("searchValue in tree", searchValue);
      setRootCode(searchValue);
      setSearchValue("");
    }
    fetchPolicyholder(rootCode);
  }, [rootCode, searchValue, setSearchValue]);

  const handleTopSearch = async (code) => {
    if (currentNode && currentNode.code === "0000000001") {
      alert("已經是最上層");
      return;
    } else {
      const response = await fetch(`/api/policyholders/${code}/top`);
      const data = await response.json();
      setCurrentNode(data.code);
      setRootCode(data.code.code);
    }
  };

  return (
    <div>
      {currentNode && (
        <div className="tree-node">
          <div className="node-root__container">
            <div className="node node-root">
              <div>{currentNode.code}</div>
              <div> {currentNode.name}</div>
            </div>
            <button
              className="top-search__button"
              onClick={() => handleTopSearch(currentNode.code)}
            >
              ^ <br />
              上一階
            </button>
          </div>
          <div className="children ">
            <NodeItem
              node={arrayToTree(currentNode.left)}
              setRootCode={setRootCode}
              rootCode={rootCode}
            />
            <NodeItem
              node={arrayToTree(currentNode.right)}
              setRootCode={setRootCode}
              rootCode={rootCode}
            />
          </div>
          <div className="white-cover"></div>
        </div>
      )}
    </div>
  );
};
