import React, { useCallback } from "react";
import ReactFlow, { Controls, Background, addEdge, useEdgesState, useNodesState } from "@reactflow/core";
import "reactflow/dist/style.css";

// Initial Nodes & Edges
const initialNodes = [
    { id: "1", position: { x: 250, y: 5 }, data: { label: "Project Root" } },
    { id: "2", position: { x: 100, y: 100 }, data: { label: "Task A" } },
    { id: "3", position: { x: 400, y: 100 }, data: { label: "Task B" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }, {id: "e1-3", source: "1", target: "3" }];

const ProjectTree = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: "100%", height: "90vh" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default ProjectTree;