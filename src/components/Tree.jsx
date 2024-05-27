import React, { useEffect, useState } from "react";
import { NodeItem } from "./NodeItem";

function arrayToTree(arr) {
  if (arr.length === 0) return null;

  let root = { info: arr[0], left: null, right: null }; // root node
  let queue = [root]; // queue for level order traversal
  let i = 1; // index in the array

  while (queue.length > 0 && i < arr.length) {
    let current = queue.shift(); // get the current node

    // Add left child
    if (i < arr.length && arr[i] !== null) {
      current.left = { info: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    // Add right child
    if (i < arr.length && arr[i] !== null) {
      current.right = { info: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }
  // console.log("root", root);
  return root;
}
const currentNode = {
  code: "000000001",
  name: "Node 1",
  registration_Date: "2024-05-01",
  introducer_code: null,
  left: [
    {
      code: "000000002",
      name: "Node 2",
      registration_Date: "2024-05-02",
      introducer_code: "0000000002",
    },
    {
      code: "0000000004",
      name: "Node 4",
      registration_Date: "2024-05-04",
      introducer_code: "0000000002",
    },
    {
      code: "0000000005",
      name: "Node 5",
      registration_Date: "2024-05-05",
      introducer_code: "0000000002",
    },
    {
      code: "0000000008",
      name: "Node 8",
      registration_Date: "2024-05-08",
      introducer_code: "0000000008",
    },
    {
      code: "0000000009",
      name: "Node 9",
      registration_Date: "2024-05-09",
      introducer_code: "0000000009",
    },
    {
      code: "0000000010",
      name: "Node 10",
      registration_Date: "2024-05-10",
      introducer_code: "0000000010",
    },
    {
      code: "0000000011",
      name: "Node 11",
      registration_Date: "2024-05-11",
      introducer_code: "0000000011",
    },
  ],
  right: [
    {
      code: "000000003",
      name: "Node 3",
      registration_Date: "2024-05-03",
      introducer_code: "0000000001",
    },
    {
      code: "0000000006",
      name: "Node 6",
      registration_Date: "2024-05-06",
      introducer_code: "0000000003",
    },
    {
      code: "0000000007",
      name: "Node 7",
      registration_Date: "2024-05-07",
      introducer_code: "0000000003",
    },
    {
      code: "0000000012",
      name: "Node 12",
      registration_Date: "2024-05-12",
      introducer_code: "0000000006",
    },
    {
      code: "0000000013",
      name: "Node 13",
      registration_Date: "2024-05-13",
      introducer_code: "0000000006",
    },
    {
      code: "0000000012",
      name: "Node 14",
      registration_Date: "2024-05-14",
      introducer_code: "0000000007",
    },
    {
      code: "0000000015",
      name: "Node 15",
      registration_Date: "2024-05-15",
      introducer_code: "0000000007",
    },
  ],
};
export const Tree = () => {
  // const [currentNode, setCurrentNode] = useState(null);

  return (
    <>
      {currentNode && (
        <div className="tree-node">
          <div className="node node-root">
            {currentNode.code} <br />
            {currentNode.name}
          </div>
          <div className="children">
            <NodeItem node={arrayToTree(currentNode.left)} />
            <NodeItem node={arrayToTree(currentNode.right)} />
          </div>
        </div>
      )}
    </>
  );
};
