import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface BoxInputData {
  'box0' : string,
  'box1' : string,
  'box2' : string,
}
export interface _SERVICE {
  'changeTurn' : ActorMethod<[string], string>,
  'checkWin' : ActorMethod<[BoxInputData], boolean>,
}
