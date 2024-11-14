import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
// Store (RTK)
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
