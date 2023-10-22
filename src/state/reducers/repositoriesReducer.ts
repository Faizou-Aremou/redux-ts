import { Action } from '../action';
import { ActionType } from '../action-type';

interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoriesState = {
  data: [],
  loading: false,
  error: null,
};
const reducer = (
  state: RepositoriesState= initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload as string[] };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload as string, data: [] };
    default:
      return state;
  }
};

export default reducer;
