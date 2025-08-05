import { CheckConnectionMethod } from "./CheckConnection";
import {
  AlgorithmFeatureQueryMethod,
  ChangedFeatureQueryMethod,
  MapFeatureQueryMethod,
  MapsFeatureQueryMethod,
  MapTypeFeatureQueryMethod,
  ProblemTypesFeatureQueryMethod,
  TraceFeatureQueryMethod,
  TracesFeatureQueryMethod,
} from "./FeatureQuery";
import { Method } from "./Message";
import { PathfindingTaskMethod } from "./SolveTask";

export * from "./Trace";
export * from "./Renderer";

type Entry<T extends Method> = { [K in T["name"]]: T };

export type NameMethodMap = Entry<CheckConnectionMethod> &
  Entry<AlgorithmFeatureQueryMethod> &
  Entry<MapTypeFeatureQueryMethod> &
  Entry<MapFeatureQueryMethod> &
  Entry<MapsFeatureQueryMethod> &
  Entry<PathfindingTaskMethod> &
  Entry<TraceFeatureQueryMethod> &
  Entry<ChangedFeatureQueryMethod> &
  Entry<TracesFeatureQueryMethod> &
  Entry<ProblemTypesFeatureQueryMethod>;
