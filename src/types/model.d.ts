import { AttrType, EdgeType, NodeType } from "./meta"

/** The in memory data structure of Node */
export interface NodeEntity {

    /** The type of this node */
    readonly type: NodeType

    /** Edges whos `to` field pointers me */
    in: ReadonlySet<EdgeEntity>

    /** Edges whos `from` field pointers me */
    out: ReadonlySet<EdgeEntity>

    /** Attributes this node carries */
    attrs: { [name: string]: any }
}

/** The in memery data structure of Edge */
export interface EdgeEntity {

    /** The type of this edge */
    readonly type: EdgeType

    /** The node where this edge starts */
    from: NodeEntity

    /** The node where this edge ends */
    to: NodeEntity

    /** Attributes this edge carries */
    attrs: { [name: string]: any }
}

/** Data structure of serialized attribute */
export interface AttrFile {

    /** 
     * Data type of this attribute 
     * 
     * 
     * This field is designed in case some of the built-in
     * types could be serialized to the same data type with 
     * those customized ones.
     */
    type: string

    /** The value of this attribute */
    value: any
}

/** Data structure of serialized node */
export interface NodeFile {
    
    /**
     * Type name of this node
     * 
     * To refer types defined by other Meta Model
     * prefix the type name with the Meta Model id
     * 
     * Example:
     * 
     * ```js
     * 'merak.uml.class'
     * ```
     */
    type: string

    /** Attributes this node carries */
    attrs?: { [name: string]: AttrFile }
}

/** Data structure of serialized edge */
export interface EdgeFile {

    /**
     * Type name of this edge
     * 
     * To refer types defined by other Meta Model
     * prefix the type name with the Meta Model id
     * 
     * Example:
     * 
     * ```js
     * 'merak.uml.inhert'
     * ```
     */
    type: string

    /** The id of the node where this edge starts from */
    from: string

    /** The id of the node where this edge goes to */
    to: string

    /** Attributes this edge carries */
    attrs?: { [name: string]: AttrFile }
}

/** Data stricture of serialized Model */
export interface ModelFile {

    /** The origin model information */
    origin: {

        /** The id of the Meta Model this Model obeys */
        meta: string

        /** Serialized node files */
        nodes: { [id: string]: NodeFile }

        /** Serialized edge files */
        edges: { [id: string]: EdgeFile }
    }
}