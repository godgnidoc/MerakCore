/** Combined definition of all data type categoies */
export type DataType = BooleanDataType | IntegerDataType | NumberDataType | StringDataType
    | ArrayDataType | StructDataType | UnionDataType | ReferenceDataType

/** Basic data type definitions */
export interface BooleanDataType {

    /** unique type name of type definition */
    readonly name: 'boolean'

    /** category of type definition */
    readonly category: 'boolean'
}

/** Basic data type definitions */
export interface IntegerDataType {

    /** type name of type definition */
    readonly name: 'integer'

    /** category of type definition */
    readonly category: 'integer'
}

/** Basic data type definitions */
export interface NumberDataType {

    /** type name of type definition */
    readonly name: 'number'

    /** category of type definition */
    readonly category: 'number'
}

/** Basic data type definitions */
export interface StringDataType {

    /** type name of type definition */
    readonly name: 'string'

    /** category of type definition */
    readonly category: 'string'
}

/** Array data type definition */
export interface ArrayDataType {

    /** type name of type definition */
    readonly name: string

    /** category of type definition */
    readonly category: 'array'

    /** Specify the data type of elements in array */
    readonly elements: DataType
}

/** Structural data type definition */
export interface StructDataType {

    /** type name of type definition */
    readonly name: string

    /** category of type definition */
    readonly category: 'struct'

    /** Specify the data type of members by name */
    readonly members: ReadonlyMap<string, AttrType>

    /** Specify the base structure which this structure inherits */
    readonly base?: StructDataType
}

/** Unioned data type  definition */
export interface UnionDataType {

    /** type name of type definition */
    readonly name: string

    /** category of type definition */
    readonly category: 'union'

    /** Specify the data types unioned */
    readonly types: ReadonlySet<DataType>
}

/** 
 * Describe attribute references to another node
 * 
 * It is recommended that the reference is used to describe
 * relationships between two nodes which carries less information
 * but meaningful to the start node.
 */
export interface ReferenceDataType {

    /** type name of type definition */
    readonly name: string

    /** category of type definition */
    readonly category: 'reference'

    /** Specify the acceptable node types */
    readonly targets: ReadonlySet<NodeType>
}

/** Attribute type definition */
export interface AttrType {

    /** Specify the data type of this attribute */
    readonly type: DataType

    /** Whether this attribute is optional */
    readonly optional: boolean

    /** Specify the default value */
    readonly default: any

    /** Basic validator of this attribute */
    readonly validator?: RegExp | { max?: number, min?: number, includeMax?: boolean, includeMin?: boolean } | ((value: any) => boolean)
}

/** Node type definition */
export interface NodeType {

    /** Node type name */
    readonly name: string

    /** Attribute definitions of nodes of this type */
    readonly attrs: ReadonlyMap<string, AttrType>
}

/** Edge type definition */
export interface EdgeType {

    /** Attribute definitions of edge of this type */
    readonly attrs: ReadonlyMap<string, AttrType>
}