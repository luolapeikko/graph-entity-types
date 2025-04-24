import {type IGraphEntityNode} from './Node';

export type GraphEdge<Entity extends IGraphEntityNode<number, Record<string, unknown>>> = [node1: Entity, node2: Entity];
