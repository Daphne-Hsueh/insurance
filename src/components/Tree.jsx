import React, { useEffect, useState } from "react";
import { NodeItem } from "./NodeItem";
import { arrayToTree } from "../utils/treeUtils";
import { fetchPolicyholder, fetchTopPolicyholder } from "../api/api";

export const Tree = ({ searchValue, setSearchValue }) => {
  const [rootNodeCode, setRootNodeCode] = useState("0000000001");
  const [currentNode, setCurrentNode] = useState(null);

  //set root node to search value then fetch policyholder
  useEffect(() => {
    if (searchValue && searchValue !== rootNodeCode) {
      setRootNodeCode(searchValue);
      setSearchValue("");
    }
    fetchPolicyholder(rootNodeCode).then(setCurrentNode);
  }, [rootNodeCode, searchValue, setSearchValue]);

  //if current node is undefined (search value not found) then alert
  useEffect(() => {
    if (currentNode === undefined) {
      alert("目前找不到符合的資料");
      setRootNodeCode("0000000001");
      fetchPolicyholder("0000000001").then(setCurrentNode);
    }
  }, [currentNode]);

  const handleTopSearch = async (code) => {
    if (currentNode && currentNode.code === "0000000001") {
      alert("已經是最上層");
      return;
    } else {
      const topPolicyholder = await fetchTopPolicyholder(code);
      setCurrentNode(topPolicyholder);
      setRootNodeCode(topPolicyholder.code);
    }
  };

  return (
    <>
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
              setRootNodeCode={setRootNodeCode}
              rootNodeCode={rootNodeCode}
            />
            <NodeItem
              node={arrayToTree(currentNode.right)}
              setRootNodeCode={setRootNodeCode}
              rootNodeCode={rootNodeCode}
            />
          </div>
          <div className="white-cover"></div>
        </div>
      )}
    </>
  );
};
