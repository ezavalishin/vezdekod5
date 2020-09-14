import {atom} from 'recoil';
import type {IFormInput} from '../types/forms';

export const GOAL = 'goal';
export const REGULAR = 'regular';

export enum Type {
  Goal = "goal",
  Regular = "regular"
}

export const typeState = atom<Type>({
  key: 'typeState',
  default: null
});

export const formDataState = atom<IFormInput>({
  key: 'formDataState',
  default: {}
});
