import { EdgeType, NodeType } from "./meta"

export interface Node {
    readonly type: NodeType
    in: Edge
    out: Edge
    attrs: { [name: string]: any }
}
export interface Edge {
    readonly type: EdgeType
    from: Node
    to: Node
    attrs: { [name: string]: any }
}